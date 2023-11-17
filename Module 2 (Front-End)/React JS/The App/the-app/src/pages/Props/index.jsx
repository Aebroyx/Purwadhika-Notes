import StudentList from "./StudentsList";

const students = [
    {id:1, name: 'Imm', program: 'JCWD'},
    {id:2, name: 'Aboy', program: 'JCWD'},
    {id:3, name: 'Bulan', program: 'JCWD'}
]

const showData = () => {
    return students.map((item, index) => {
        return(
            // StudentList(item, index)
            <StudentList data={item} key={index} />
        )
    })
}

export default function Props() {
    return(
        <>
            <h1>
                Props Pages
            </h1>

            {showData()}
        </>
    )
}