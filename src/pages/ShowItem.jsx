import { Link, useParams } from "react-router-dom"
import UseStock from "../hooks/useStock"
import DeleteButton from "../components/DeleteButton/DeleteButton"

export default function ShowItem() {

    const { getItem } = UseStock()
    const { id } = useParams()

    const item = getItem(id)
    const createdAt = item.createdAt.toDateString()
    const updatedAt = item.updatedAt.toDateString()
    
    return (
        <section>
            <h2>{item.name}</h2>
            <Link to={`/items/${id}/update`} >
                Atualizar
            </Link>
            <DeleteButton itemName={item.name} id={item.id}/>
            <div>
                <span>Categoria: {item.category}</span>
                <span>Quantidade em estoque: {item.quantity}</span>
                <span>Preço: R$ {item.price}</span>
            </div>
            <div>
                {item.description}
            </div>
            <div>
                <span>Cadastrado em: {createdAt}</span>
                <span>Atualizado em: {updatedAt}</span>
            </div>
        </section>

    )
}