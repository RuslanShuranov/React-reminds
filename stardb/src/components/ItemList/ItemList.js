import React, {Component} from 'react';

import './ItemList.css';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    componentDidMount() {

        const {getData} = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
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
        const {itemList, error} = this.state

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)
        const errorIndicator = error ? <ErrorIndicator/> : null
        return (
            <ul className="item-list list-group">
                {errorIndicator}
                {items}
            </ul>
        );
    }
}