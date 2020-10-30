
import React from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search.js';
import fetch from 'superagent';
import Dropdown from './Dropdown.js';
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
        order: '',
        list: []
    }
    
    componentDidMount = async () => {
        this.fetchPokemon()
    }
    fetchPokemon = async () => {
        const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchTerm}&sort=${this.state.description}&direction=${this.state.order}
        `);
        this.setState({ list : data.body.results }) 
    }


    handleSearchChange = e => {
        this.setState({
            searchTerm: e.target.value,
        });
    
    }

    handleChangeDescription = async (e) => {
    await this.setState({
        description: e.target.value,
      });
      this.fetchPokemon()
      console.log(e.target.value)
      
    }

    handleChange = e => {
      this.setState({
        filter: e.target.value
      });
    }



    handleChangeOrder= async (e) => {
        await this.setState({
            order: e.target.value,
          });
          this.fetchPokemon()
          console.log(e.target.value)
          
        }

  
    render() {
        return (
          <div className="grid-stuff">
            <Search handleSearchChange={this.handleSearchChange} />
            <Dropdown 
            handleChangeDescription={this.handleChangeDescription}

            handleChangeOrder={this.handleChangeOrder}
             />
            <PokemonList className='pokemon-grid'
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

