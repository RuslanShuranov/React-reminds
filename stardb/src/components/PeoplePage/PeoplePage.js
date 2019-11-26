import React, {Component} from 'react'

import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapi-service';

import './PeoplePage.css'

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 4,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return (<ErrorIndicator/>)
        }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onPersonSelected={this.onPersonSelected}
                              getData={this.swapiService.getPeople}
                              renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}