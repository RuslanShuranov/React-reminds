import React from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'
import AddTodoPanel from '../AddTodoPanel';

import './App.css'

export default class App extends React.Component {
    maxId = 1;

    state =
        {
            todos: [
                this.createTodoItem('Learn React'),
                this.createTodoItem('Learn Redux'),
                this.createTodoItem('Learn Webpack')
            ],
            term: '',
        }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx]
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        }

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    createTodoItem(label) {
        return {
            id: this.maxId++,
            label,
            done: false,
            important: false
        }
    }

    deleteItem = (id) => {
        this.setState(({todos}) => {
            const idx = todos.findIndex((el) => el.id === id)

            const newArray = [
                ...todos.slice(0, idx), ...todos.slice(idx + 1)
            ]

            return {
                todos: newArray
            }
        })
    }

    addNewTodo = (text) => {
        const newTodo = this.createTodoItem(text)

        this.setState(({todos}) => {
            const newArray = [
                ...todos, newTodo
            ]

            return ({
                todos: newArray
            })
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todos}) => {
            return {
                todos: this.toggleProperty(todos, id, 'done')
            }
        })
    }

    onSearch = (value) => {
        this.setState({
            term: value
        })
    }

    search(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }

    render() {
        const {todos, term} = this.state
        const doneCount = todos.filter((el) => el.done).length
        const todosCount = todos.length - doneCount
        const visibleItems = this.search(todos, term)

        return (
            <div className="todo-app">
                <AppHeader toDo={todosCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearch={this.onSearch}/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={visibleItems}
                          onDelete={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <AddTodoPanel addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
};