import React from 'react'

import './TodoListItem.css'

export default class TodoListItem extends React.Component {

    render() {

        const {label, onDelete, done, important, onToggleImportant, onToggleDone} = this.props

        let classNames = 'todo-list-item'

        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
              <span
                  className="todo-list-item-label"
                  onClick={onToggleDone}>
                {label}
              </span>

              <button type="button"
                      className="btn btn-outline-success btn-sm float-right"
                      onClick={onToggleImportant}>
                <i className="fa fa-exclamation"/>
              </button>

              <button type="button"
                      className="btn btn-outline-danger btn-sm float-right"
                      onClick={onDelete}>
                <i className="fa fa-trash-o"/>
              </button>
            </span>
        )
    }
}