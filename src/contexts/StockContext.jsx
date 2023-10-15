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

    const deleteItem = (id) => {
        setItems(currentState => {
            const updateditems = currentState.filter(item => item.id != id)
            localStorage.setItem("stored-items", JSON.stringify(updateditems))
            return updateditems
        })
    } 

    const getItem = (id) => {
        return items.find(item => item.id === +id)
    }

    const updateItem = (id, newProperties) => {
        setItems(currentState => {
            const itemIndexToremove = currentState.findIndex(item => item.id === +id)
            const updatedItems = [...currentState]
            Object.assign(updatedItems[itemIndexToremove], newProperties, {updatedAt: new Date()})
            localStorage.setItem('stored-items', JSON.stringify(updatedItems))
            return updatedItems
        })

    }

    const stock = {
        items,
        addItem,
        deleteItem,
        getItem,
        updateItem
    }

    return (
        <stockContext.Provider value={stock}>
            {children}
        </stockContext.Provider>
    )
}