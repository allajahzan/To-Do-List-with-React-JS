import image from '../../assets/image.jpg'

function ImageHeader() {
    return (
        <>
            <h3 className='font-bold text-2xl bg-slate-100 rounded-xl p-2 w-full text-center'>To Do List</h3>
            <img className='w-60 absolute top-8 z-0' src={image} alt="" />
        </>
    )
}

export default ImageHeader