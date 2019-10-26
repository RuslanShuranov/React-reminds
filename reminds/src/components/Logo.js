import React from 'react';
import AltName from "./AltName";

class Logo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            altName: null
        }
    }

    render() {
        return (
            <header>
                Hello, {this.props.name}!
                <AltName altName={this.state} />
            </header>
        )
    };
}

export default Logo;
