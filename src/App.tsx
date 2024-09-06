import './App.css'
import ImageHeader from './components/imageHeader/imageHeader'
import ListAdded from './components/listAdded/listAdded'
import SubmitButton from './components/submitButton/submit'
import { useState } from 'react'

function App() {


    // to get the title from the form
    let [item, getItem] = useState<string>('')

    // to store items to array
    let [items, addItems] = useState<string[]>([])

    // submition handler
    let handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault()
        addItems((prev) => [...prev, item])
        let form = document.getElementById('add_form') as HTMLFormElement
        form.reset()
    }

    // to edit item
    let editItem = (index: number, editedItem: string): void => {
        let prevItems: string[] = [...items]
        prevItems[index] = editedItem
        addItems(prevItems)
    }

    // to delete item
    let deleteItem = (index:number) =>{
        let prevItems : string[] = [...items]
        prevItems.splice(index,1)
        addItems(prevItems)
    }



    return (
        <>
            <section className='container h-screen flex items-center justify-center'>

                <div className='containerSmall rounded-xl p-5 w-[420px] relative flex flex-col items-center bg-white'>

                    <ImageHeader />

                    <form id='add_form' className='pt-20 w-full flex justify-between' onSubmit={handleSubmit} >
                        <input onChange={(event) => getItem(event.target.value)} placeholder='Add lists' className='focus:outline-none w-full border-2 border-solid border-grey px-2 py-2 z-10 rounded-xl' type="text" id='title' required />
                        <SubmitButton className='ml-2' value="Add" />
                    </form>

                    <div className='w-full mt-5 h-96 overflow-y-auto'>
                        {items.map((item, index) => <ListAdded key={index + ' ' + item} index={index} item={item} editItem={editItem} deleteItem={deleteItem} />)}
                    </div>

                </div>

            </section>
        </>
    )
}

export default App
