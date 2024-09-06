import './submit.css'

interface Value{
    value:string,
    className?:string
}

function SubmitButton({value, className}:Value){
    return (
        <>
            <input type="submit" value={value} className={className} />
        </>
    )
}

export default SubmitButton