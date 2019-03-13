import React from "react"
import './style.css'

function TodoItem(props) {
    console.log(props)
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={props.checkClicked} />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem