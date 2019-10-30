import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

import './index.css'

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

ReactDOM.render(<App/>, document.getElementById('root'))