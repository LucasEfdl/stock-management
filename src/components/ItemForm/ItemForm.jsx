import { useState } from "react"
import styles from "./styles.module.css"

import PropTypes from "prop-types"
import UseStock from "../../hooks/useStock"

const CATEGORIES = [
    "Jogos",
    "Mobilha",
    "Eletronicos",
    "Acessórios",
    "Livros",
    "brinquedos"
]

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

    const [item, setItem] = useState( itemToUpdate ? itemToUpdate : defaultItem)
    
    const { addItem } = UseStock()
    


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
        addItem(item)
        setItem(defaultItem)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.row}>
            <div>
                <label htmlFor="name">Nome</label>
                <input 
                    required
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={item.name}
                    onChange={handleChange}
                />
            </div>
            <div>
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
            <div>
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
            <div>
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
            <div className={styles.formDescription}>
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