export const CATEGORIES = [
    "Jogos",
    "Mobilha",
    "Eletronicos",
    "Acessórios",
    "Livros",
    "brinquedos"
]

export default class StockItem {
    constructor({name, description, quantity, category, price}) {

        this.id = Math.floor(Math.random() * 1000000000)
        this.name = name
        this.description = description
        this.quantity = +quantity
        this.category = category
        this.price = +price
        this.createdAt = new Date()
        this.updateAt = new Date()
    }

    #validate() {

        const validName = typeof this.name === "string"
        const validDescription = typeof this.description === "string"
        const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity)
        const validPrice = typeof this.price === "number"
        const validCategory = CATEGORIES.includes(this.category)
        
        if(!(
            validName &&
            validDescription &&
            validQuantity &&
            validPrice &&
            validCategory
        )) {
            throw new Error("Item Invalido!")
        }
    }
}