import SubmitButton from '../submitButton/submit'
import edit_icon from '../../assets/edit_icon.svg'
import delete_icon from '../../assets/delete_icon.svg'
import { useState } from 'react'


interface objType {
    item: string,
    index: number,
    editItem: (index: number, editedItem: string) => void,
    deleteItem: (index: number) => void
}

function ListAdded({ item, index, editItem, deleteItem }: objType) {

    // to change check box
    let [isDone, ChangeStatus] = useState<boolean>(false)
    const statusChange = (): void => {
        ChangeStatus(!isDone)
    }

    // to get edit form
    let [mode, EditMode] = useState<boolean>(false)
    const changeMode = (): void => {
        EditMode(!mode)
    }

    // editInputBoxValue
    let [InputValue, getEditInputValue] = useState<string>(item)

    let handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        editItem(index, InputValue)
        changeMode()
    }

    let handleDelete = () => {
        deleteItem(index)
    }


    return (
        <>
            {

                !mode ?

                    <div className='w-full h-14 flex items-center justify-between bg-gray-100 px-3 mb-3 rounded-xl'>
                        <div className='flex items-center'>
                            <input type="checkbox" id={`check${index}`} onChange={statusChange} className='h-5 w-5 mr-2' checked={isDone} />
                            <label className={`w-60 text-ellipsis overflow-hidden text-lg ${isDone ? 'line-through' : ''}`} htmlFor={`check${index}`}>{item}</label>
                        </div>
                        <div className='flex'>
                            <button className='button w-8 flex justify-center' type="button" onClick={changeMode}><img className='w-5' src={edit_icon} alt="" /></button>
                            <button className='button w-8 flex justify-center' type="button" onClick={handleDelete}><img className='w-5' src={delete_icon} alt="" /></button>
                        </div>
                    </div>

                    :

                    <div className='w-full h-14 flex items-center bg-gray-100 px-3 mb-3 rounded-xl'>
                        <form className='w-full flex justify-between' onSubmit={handleSubmit}>
                            <input id={`editInput${index}`} onChange={(event) => getEditInputValue(event.target.value)} className='focus:outline-none w-full border-2 border-solid border-white px-2 text-lg rounded-md' value={InputValue} type="text" autoComplete='false' />
                            <SubmitButton value="Save" className='ml-2' />
                        </form>
                    </div>

            }
        </>
    )
}

export default ListAdded