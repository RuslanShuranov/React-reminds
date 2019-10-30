import React from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import AddTodoPanel from '../AddTodoPanel';

import './App.css'

export default class App extends React.Component {
    maxId = 100;

    state =
        {
            todos: [{id: 1, label: 'Learn React', important: true},
                {id: 2, label: 'Learn Redux', important: false},
                {id: 3, label: 'Learn Webpack', important: false}]
        }

    deleteItem = (id) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.id === id)

            const newArray = [
                ...todos.slice(0, idx), ...todos.slice(idx+1)
            ]

            return {
                todos: newArray
            }
        })
    }

    addNewTodo = (text) => {
        const newTodo = {
            id: this.maxId++,
            label: text,
            important: false
        }


        this.setState(({todos}) => {
            return {
                todos: [...todos, newTodo]
            }
        })
    }

    render() {

        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.todos} onDelete={this.deleteItem}/>
                <AddTodoPanel addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
};