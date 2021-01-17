import './App.css';
import React, { Component } from 'react';
import CardList from './components/CardList/CardList.jsx';
import Search from './components/Search/Search.jsx';

class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      monsters: [],
      searchField: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => {
      return response.json();
    })
    .then( users => {
      this.setState({ monsters: users });
    });
  }
  
  handleChange = ( e ) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { searchField, monsters } = this.state;

    const filteredMonsters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes( searchField.toLowerCase() );
    });

    return (
      <div className="App">
        <h1>Search and filter with React</h1>
        <Search 
          placeholder="Search monsters" 
          handleChange={ this.handleChange } 
        />
        <CardList 
          monsters={ filteredMonsters }
        />
      </div>
    );
  }
  
}

export default App;
