import React, {Component} from 'react';

import './ItemList.css';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

export default class ItemList extends Component {

    swapiServise = new SwapiService()

    state = {
        peopleList: null
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    componentDidMount() {
        this.swapiServise
            .getPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
            .catch(this.onError)
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onPersonSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {
        const {peopleList, error} = this.state

        if (!peopleList) {
            return <Spinner/>
        }

        const items = this.renderItems(peopleList)
        const errorIndicator = error ? <ErrorIndicator/> : null
        return (
            <ul className="item-list list-group">
                {errorIndicator}
                {items}
            </ul>
        );
    }
}