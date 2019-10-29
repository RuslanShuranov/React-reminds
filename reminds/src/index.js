import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from './components/AppHeader';
import Search from './components/Search';
import TodoList from './components/TodoList';

const App = () => {
    return (
        <div>
            <AppHeader/>
            <Search/>
            <TodoList/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))