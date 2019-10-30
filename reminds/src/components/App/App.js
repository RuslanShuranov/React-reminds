import React from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import ItemStatusFilter from '../ItemStatusFilter'
import TodoList from '../TodoList'

import './App.css'

const App = () => {
    const todos = [
        {
            id: 1, label: 'Learn React', important: true
        }, {
            id: 2, label: 'Learn Redux', important: false
        }, {
            id: 3, label: 'Learn Webpack', important: false
        }
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todos}/>
        </div>
    )
}

export default App