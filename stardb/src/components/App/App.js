import React from 'react'
import RandomPlanet from '../RandomPlanet';
import Header from '../Header';
import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';

export default class App extends React.Component {

    render() {

        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        )
    }
}