import React, { Component } from 'react';
import './style.css';

class Card extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return(
            <div className="card-container">
                <img alt={this.props.monster.name} src={`https://robohash.org/${this.props.monster.id}?set=set2`} />
                <p>{ this.props.monster.name }</p>
                <p>{ this.props.monster.email }</p>
            </div>
        )
    }
}

export default Card;