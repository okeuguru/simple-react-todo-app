import React, { Component } from "react"
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import TodoItem from "../components/TodoItem/TodoItem";
import todosData from '../todosData.js'
import './style.css'

class App extends Component {

    constructor() {
        super()

        this.state = {
            todos: todosData
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("clicked")
    }

    render() {
        const todoItems = this.state.todos.map(item =>
            <TodoItem
                key={item.id}
                item={item}
                checkClicked={this.handleClick}
            />)

        return (
            <div>
                <Header />
                <div className="todo-list">
                    {todoItems}
                </div>
                <Footer />
            </div >
        )
    }
}

export default App