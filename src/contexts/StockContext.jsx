/* eslint-disable react-refresh/only-export-components */
import {  createContext, useState } from "react";
import PropTypes from "prop-types";

StockContextProvider.propTypes = {
    children: PropTypes.node
}

export const stockContext = createContext({})


export function StockContextProvider({ children }) {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem("stored-items")
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach(item => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
            
        });
        return items
    })

    const addItem = (item) => {
        setItems(currentState => {
            const updateditems = [item, ...currentState]
            localStorage.setItem("stored-items", JSON.stringify(updateditems))
            return updateditems
        })
    }

    const stock = {
        items,
        addItem
    }


    return (
        <stockContext.Provider value={stock}>
            {children}
        </stockContext.Provider>
    )
}