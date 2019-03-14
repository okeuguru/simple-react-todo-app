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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item =>
            <TodoItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
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