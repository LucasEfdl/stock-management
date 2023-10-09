import PropTypes from "prop-types"
import ItemForm from "../components/ItemForm/ItemForm"

UpdateItem.propTypes = {
    ItemToUpdate: PropTypes.object
}


export default function UpdateItem({ ItemToUpdate }) {
    return (
        <ItemForm ItemToUpdate={ItemToUpdate} />
    )
}