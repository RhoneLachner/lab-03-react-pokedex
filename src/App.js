import React, {Component} from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Header from './Header.js';
import Footer from './Footer.js';
import Search from './Search.js';
import { pokemonData } from './data.js';
import PokemonList from './PokemonList';

export default class App extends React.Component {
  state = {
    searchTerm: '',
    image: '',
    name: '',
    description: '',
    attack: '',
    defense: '',
}


handleSearchChange = e => {
    this.setState({
        searchTerm: e.target.value,
    });
console.log(e.target.value)

}
// handleChangeType_1 = e => {
//   this.setState({
//       attack: e.target.value,
//   });
// }
// handleChangeType_1 = e => {
//   this.setState({
//       defense: e.target.value,
//   });
// }

render() {
  return (
    <div className="App">
<Header />
<Search handleSearchChange={this.handleSearchChange}  />
<PokemonList
 searchTerm={this.state.searchTerm} 
 pokemonDataProp={pokemonData}
 />
{/* <Dropdown pokemonDataProp={pokemonData}/> */}

<Footer />

    </div>
  );
}
}
