import PropTypes from "prop-types"
import UseStock from "../../hooks/useStock"

DeleteButton.propTypes = {
    itemName: PropTypes.string,
    id: PropTypes.number
}

export default function DeleteButton({ itemName, id }) {

    const { deleteItem } = UseStock()

    const handleDelete = () => {
        if(confirm(`Tem certeza que deseja excluir o item ${itemName}?`)) {
            deleteItem(id)
        }
    }

    return (
        <button
            onClick={handleDelete}
        >
            Excluir
        </button>
    )

}