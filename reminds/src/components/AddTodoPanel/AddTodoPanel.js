import React from 'react'

import './AddTodoPanel.css'

export default class AddTodoPanel extends React.Component {

    render() {

        const { addNewTodo } = this.props

        return (
            <div className='add-todo-panel input-group'>
                <input type="text" className="form-control" placeholder="Type new todo"
                       aria-label="Add new todo" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success" type="button" onClick={() => addNewTodo('hello')}><i className="fa fa-plus"/> Add</button>
                </div>
            </div>
        )
    }
}