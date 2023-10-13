import { Link } from "react-router-dom";
import UseStock from "../../hooks/useStock";

import "./styles.module.css"
import DeleteButton from "../DeleteButton/DeleteButton";

export default function ItemTable() {
    const { items } =  UseStock()
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Em Estoque</th>
                    <th>ID</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{item.quantity} undi.</td>
                        <td>{item.id}</td>
                        <td>
                            <Link 
                                to={`/items/${item.id}`}
                            >
                                Ver
                            </Link>
                            <Link 
                                to={`/items/${item.id}/update`}
                            >
                                Atualizar
                            </Link>
                            <DeleteButton itemName={item.name} id={item.id} />
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}