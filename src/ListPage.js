
import React from 'react';
import PokemonList from './PokemonList.js';
import Search from './Search.js';
import fetch from 'superagent';
import Dropdown from './Dropdown.js';
// import { pokemonData } from './data.js';
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
        list: [],
        pageNumber: 1,
        count: 1
    }
    
    componentDidMount = async () => {
        this.fetchPokemon()
    }
    fetchPokemon = async () => {
        const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20&pokemon=${this.state.searchTerm}&sort=${this.state.description}&direction=${this.state.order}
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

        handleClick = async (quote) => {
          // how can i get the character that i clicked on?
          this.props.history.push(`/quotes/${quote.character}`);
        }

        handleIncrement = async () => {
          await this.setState({ 
              pageNumber: this.state.pageNumber + 1, 
          })
  
          await this.fetchPokemon();
      }
  
      handleDecrement = async () => {
          await this.setState({ 
              pageNumber: this.state.pageNumber - 1, 
          })
          await this.fetchPokemon();
    }
  
    render() {
        return (

        <>
 <div>
                Page {this.state.pageNumber} out of {Math.ceil(this.state.count / 20)}
            </div>
            <div>
                {this.state.count} total pokemon in query 
            </div>
            {
             <button 
                disabled={this.state.pageNumber === 1} 
                onClick={this.handleDecrement}>
                Prev
            </button>
            }
            {
            <button 
                onClick={this.handleIncrement} 
                disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
                Next
            </button>
            }

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
{/* 
     <div>
                {
                this.state.loading
                ? 'loading!!!'
                // what if i wanted an onClick handler inside of a map?
                : this.state.pokemon.map(pokemon => 
                        <div key={pokemon.pokemon}>
                            <p>{pokemon.pokemon}</p>
                            <img src={pokemon.url_image} alt={pokemon.pokemon} width="100" height="100"/>
                            <p>{pokemon.type_1}</p>
                        </div>
                        )
                }
          
          </div> */}

        </>

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

