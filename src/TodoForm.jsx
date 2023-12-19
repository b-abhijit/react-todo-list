/* eslint-disable react/prop-types */
import { useState } from "react";

export function TodoForm({addTodo}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return

        addTodo(newItem)
    
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input onChange={e => setNewItem(e.target.value)} value={newItem} type="text" id="item" />
            </div>
            <button className="btn">Add Item</button>
        </form>
    )
}