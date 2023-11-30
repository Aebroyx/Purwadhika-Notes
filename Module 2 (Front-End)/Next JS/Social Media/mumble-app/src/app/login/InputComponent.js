export default function InputComponent(props) {
    return(
        <label className="w-[330px]">
            <h2 className="text-white pb-2">{props.label}</h2>
            <input type={`${props.type}`} ref={props.inputRef} placeholder="Type here..." className="input input-ghost w-full max-w-xs" />
        </label>
    )
}