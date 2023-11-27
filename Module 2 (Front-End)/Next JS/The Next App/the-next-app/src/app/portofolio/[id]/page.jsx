import { getItem } from "@/app/utils/getItem"

export default async function Users(props) {
    const id = props.params.id
    const item = await getItem(id)

    return(
        <>
            Name: {item.name}
            <hr />
            {JSON.stringify(item)}
        </>
    )
}