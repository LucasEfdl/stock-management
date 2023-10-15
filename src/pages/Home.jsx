import { Link } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function Home() {
    const { items } = useStock()

    const diversityItems = items.length
    const totalQuantityItens = items.reduce((sum, item) => sum + +item.quantity, 0)

    const limitDate = new Date()
    limitDate.setDate(limitDate.getDate() - 10)

    const recentItens = items.filter((item) => item.createdAt.getDate() >= limitDate.getDate())
    const recentItensTotal = recentItens.length

    const itemsLow = items.filter(item => item.quantity < 10)
    const itemsLowQuantity = itemsLow.length


    return (
        <>
            <main>
                <h2>DashBoard</h2>
                <div className="row">
                    <div className="dashboard-card">
                        Diversidade de itens
                        <span>{diversityItems}</span>
                    </div>
                    <div className="dashboard-card">
                        Inventario total
                        <span>{totalQuantityItens}</span>
                    </div>
                    <div className="dashboard-card">
                        Itens recentes
                        <span>{recentItensTotal}</span>
                    </div>
                    <div className="dashboard-card">
                        Itens acabando
                        <span>{itemsLowQuantity}</span>
                    </div>
                </div>
                <div className="row">
                    <table className="recent">
                        <thead>
                            <tr>
                                <th>Itens Recentes</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentItens.map(item => (
                                <tr key={item.id}>
                                    <th>{item.name}</th>
                                    <th>
                                        <Link to={`/items/${item.id}`}>Ver</Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table className="low">
                        <thead>
                            <tr>
                                <th>Itens acabando</th>
                                <th>Quantidade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemsLow.map(item => (
                                <tr key={item.id}>
                                    <th>{item.name}</th>
                                    <th>{item.quantity}</th>
                                    <th>
                                        <Link to={`/items/${item.id}`}>Ver</Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </main>
        </>
    )
}