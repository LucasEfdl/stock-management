import PropTypes from "prop-types"
import UseStock from "../../hooks/useStock"
import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom"

DeleteButton.propTypes = {
    itemName: PropTypes.string,
    id: PropTypes.number
}

export default function DeleteButton({ itemName, id }) {

    const { deleteItem } = UseStock()
    const navigate = useNavigate()

    const handleDelete = () => {
        if(confirm(`Tem certeza que deseja excluir o item ${itemName}?`)) {
            deleteItem(id)
            navigate("/items")
        }
    }

    return (
        <button
            className="btn btn-delete"
            onClick={handleDelete}
        >
            Excluir
        </button>
    )

}