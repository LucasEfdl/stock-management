import { useParams } from "react-router-dom";
import ItemForm from "../components/ItemForm/ItemForm"
import UseStock from "../hooks/useStock"



export default function UpdateItem() {

    const {getItem} = UseStock();
    const {id} = useParams()

    const ItemToUpdate = getItem(id)

    return (
        <ItemForm itemToUpdate={ItemToUpdate} />
    )
}