
import React from 'react';
import PokemonList from './PokemonList.js';
// import Dropdown from './Dropown.js';
import Search from './Search.js';
import fetch from 'superagent';
import { pokemonData } from './data.js';
import './App.css';


export default class ListPage extends React.Component {
    state = {
        searchTerm: '',
        image: '',
        name: '',
        description: '',
        attack: '',
        defense: '',
        list: []
    }
    
    componentDidMount = async () => {
        const data = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
        this.setState({ list : data.body.results }) 

    }



    handleSearchChange = e => {
        this.setState({
            searchTerm: e.target.value,
        });
    console.log(e.target.value)
    
    }

    
    handleChangeDescription = (e) => {
      this.setState({
        description: e.target.value,
      });
    }
    handleChange = e => {
      this.setState({
        filter: e.target.value
      });
    }




  
    render() {
        return (
          <div className="grid-stuff">
            <Search handleSearchChange={this.handleSearchChange} />
            {/* <Dropdown 
            handleChangeDescription={this.handleChangeDescription} /> */}
            <PokemonList
            searchTerm={this.state.searchTerm} 
            pokemonDataProp={this.state.list}
            />
          </div>
        );
    }
  }
  

//   state={
//     list: null,
//     pokemon: [],
//     description: [],
//     attack: [],
//     defense: [],
//     query: '',
//                 }


  

    // handleChange = (e) => {
    //     this.setState({ query: e.target.value });
    // }



    // componentDidMount = async() => {
    //     await this.handleClick();
    // }


    // handleClick = async () => {
    //     const query = this.state.query;
    //     const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)


    //     console.log(data.body);

    //     this.setState({ list: data.body })

    // }





    // 
    // //    <ul>

    //         {
    //             this.state.pokemon.length && this.state.quotes.map(pokemon =>
    //                 <li className='pokemon-item'>{pokemon}</li>)
    //         }
    //    </ul>
       

//        <main>
//        <p>Search Pokemon:</p>
//        <input onChange={this.handleChange} name="search" />
//        <button onClick={this.handleClick}>🔍</button>

//        <ul className="list">
//            {
//                this.state.list.length && this.state.list.map(list => <li className="list-item"> {list.list} </li >)
//            }
//        </ul>
//    </main >
            
//         );
//     }
// }

