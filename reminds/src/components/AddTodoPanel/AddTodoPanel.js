import React from 'react'

import './AddTodoPanel.css'

export default class AddTodoPanel extends React.Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addNewTodo(this.state.label)
        this.setState({
            label: ''
        })
    }


    render() {

        return (
            <form className='add-todo-panel input-group' onSubmit={this.onSubmit}>
                <input type="text" className="form-control" placeholder="Type new todo"
                       aria-label="Add new todo" aria-describedby="basic-addon2" onChange={this.onLabelChange} value={this.state.label}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success"><i className="fa fa-plus"/> Add</button>
                </div>
            </form>
        )
    }
}