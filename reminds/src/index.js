import React from 'react'
import ReactDOM from 'react-dom'

const el = (
    <div>
        <h1>My Todo application</h1>
        <input type="text" placeholder={'Search'}/>
        <ul>
            <li>Learn React</li>
            <li>Learn Redux</li>
            <li>Learn Webpack</li>
        </ul>
    </div>
)

ReactDOM.render(el, document.getElementById('root'))