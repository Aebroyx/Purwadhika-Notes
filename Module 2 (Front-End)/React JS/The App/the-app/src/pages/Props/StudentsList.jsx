export default function StudentList(props) {
    return(
        <div style={{borderBottom: '1px solid gray'}}>
            <h6>
               {props.data.id}
            </h6>
            <h3>
                Name: {props.data.name}
            </h3>
            <h3>
                Program: {props.data.program}
            </h3>
        </div>
    )
}