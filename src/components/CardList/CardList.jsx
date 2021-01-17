import React, { Component } from 'react';
import Card from './../../components/Card/Card';
import "./style.css";

class CardList extends Component {
    constructor( props ) {
        super( props );
            
    }

    render() {

        return(
            <div className="card-list">
                {
                    this.props.monsters.map( monster => {
                       return(
                            <Card key={monster.id} monster={monster} />
                       ) 
                    })
                }
            </div>
        )
    }
}
export default CardList;