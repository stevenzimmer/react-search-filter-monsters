import React, { Component } from 'react';
import './style.css';

class Search extends Component {
    constructor( props ) {
        super( props );
    }
    
    
    render() {
        
        return(
            <input 
                className="search"
                onChange={ this.props.handleChange } 
                type="search" 
                placeholder={this.props.placeholder} 
            />
        )
    }
}

export default Search;