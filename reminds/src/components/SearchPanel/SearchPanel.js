import React from 'react'
import './SearchPanel.css'

export default class SearchPanel extends React.Component {
    state = {term: ''}
    onSearchChange = (e) => {
        e.preventDefault()
        const term = e.target.value
        this.props.onSearchChange(term)
        this.setState({term})
    }

    render() {
        return (
            <input type="text"
                   onChange={this.onSearchChange}
                   className="form-control search-input"
                   placeholder="Type to search"
                   value={this.state.term}/>)
    }
}