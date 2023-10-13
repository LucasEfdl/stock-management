import { useParams } from "react-router-dom"
import UseStock from "../hooks/useStock"

export default function ShowItem() {

    const { getItem } = UseStock()
    const { id } = useParams()

    const item = getItem(id)
    console.log(item);
    
    return (
        <h2>{item.name}</h2>
    )
}