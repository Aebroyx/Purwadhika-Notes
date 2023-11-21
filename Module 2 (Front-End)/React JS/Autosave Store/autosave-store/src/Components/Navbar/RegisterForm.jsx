export default function RegisterForm(props){
    console.log(props.inputRef)
    return(
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input type={props.type} ref={props.inputRef} placeholder={`Type ${props.label}`} className="input input-bordered w-full" />
        </div>
    )
}