import { useRef, useState } from "react"

import PropTypes from "prop-types"
import UseStock from "../../hooks/useStock"
import StockItem, { CATEGORIES } from "../../entities/StockItem"

ItemForm.propTypes = {
    itemToUpdate: PropTypes.object
}


export default function ItemForm({ itemToUpdate }) {

    const defaultItem = {
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        category: ''
    }

    const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
    const inputRef = useRef(null)

    const { addItem, updateItem } = UseStock()



    const handleChange = (ev) => {
        setItem(currentItem => {
            return {
                ...currentItem,
                [ev.target.name]: ev.target.value
            }
        })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()

        try {
            if(itemToUpdate) {
                updateItem(itemToUpdate.id, item)
                alert("Item atualizado com sucesso!")
            } else {
                const validItem = new StockItem(item)
                addItem(validItem)
                setItem(defaultItem)
                alert("Novo item cadastrado com sucesso")

            }
        } catch (err) {
            alert("Ops... Algo deu errado =(")

        } finally {
            inputRef.current.focus()
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="aligned-row">
                <div className="input-area">
                    <label htmlFor="name">Nome</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        ref={inputRef}
                        autoComplete="off"
                        value={item.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-area">
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        required
                        type="number"
                        name="quantity"
                        id="quantity"
                        min={0}
                        step={1}
                        value={item.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-area">
                    <label htmlFor="price">Preço</label>
                    <input
                        required
                        type="number"
                        name="price"
                        id="price"
                        min={0.01}
                        step={0.01}
                        value={item.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-area">
                    <label htmlFor="category">Categorias</label>
                    <select
                        required
                        name="category"
                        id="category"
                        value={item.category}
                        onChange={handleChange}
                    >
                        {CATEGORIES.map(category => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="description-area">
                <label htmlFor="description">Descrição</label>
                <textarea
                    name="description"
                    id="description"
                    rows={6}
                    cols={100}
                    required
                    value={item.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button className="is-primary">
                Salvar
            </button>
        </form>
    )
}