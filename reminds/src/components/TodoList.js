import React from 'react'

export default class TodoList extends React.Component {
    render() {
        const todoList = ['Learn React', 'Learn Redux', 'Learn Webpack']
        return (
            <ul>
                {todoList.map((item) => {
                    console.log(item)
                    return <li>{item}</li>
                })}
            </ul>
        )
    }
}