import styles from "./styles.module.css"


const CATEGORIES = [
    "Jogos",
    "Mobilha",
    "Eletronicos",
    "Acessórios",
    "Livros",
    "brinquedos"
]

export default function ItemForm() {
    return (
        <form>
            <div className={styles.row}>
            <div>
                <label htmlFor="name">Nome</label>
                <input 
                    required
                    type="text"
                    name="name"
                    id="name"
                />
            </div>
            <div>
                <label htmlFor="quantity">Quantidade</label>
                <input 
                    required
                    type="number"
                    name="number"
                    min={0}
                    step={1} 
                />
            </div>
            <div>
                <label htmlFor="price">Preço</label>
                <input 
                    required
                    type="number"
                    name="number"
                    min={0.01}
                    step={0.01} 
                />
            </div>
            <div>
                <label htmlFor="category">Categorias</label>
                <select
                    required 
                    name="category" 
                    id="category"
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
                ></textarea>
            </div>
            <button className="is-primary">
                Salvar
            </button>
        </form>
    )
}