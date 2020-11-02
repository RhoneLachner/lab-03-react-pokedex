import React, { Component } from 'react';
import ListPage from './ListPage'
import PokemonList from './PokemonList';
import PokemonItem from './PokemonItem.js';
import { PokemonDataProp } from './ListPage.js';
import fetch from 'superagent'
// import PokemonList from './PokemonList'
// import PokemonDataProp from 'PokemonList.js'
// import PokemonItem from 'PokemonItem.js'

export default class DetailsPage extends Component {
    
    state = {
        list: {},
    }
    
        componentDidMount = async () => {
           
       
        
            const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}
            `)
            this.setState({ list : data.body.results[0]}) 
            console.log(data.body.results[0])
        }
    
    
    
    
    render() {
        console.log(this.state.list)
        return (
            <div>

                <h1>{this.props.match.params.pokemon}</h1>
                <PokemonItem
                pokemonDataProp={this.state.list}
                image={this.state.list.url_image}
                name={this.state.list.pokemon}
                description={this.state.list.type_1}
                attack={this.state.list.attack}
                defense={this.state.list.defense}
                />

                {
                this.state.pokemon.length === 0 
                ? 'loading!'
                : this.state.list.map(list => <div key={list.pokemon}>
                    <p>{list.character}</p>
                    <img src={list.image} alt={list.pokemon} width="100" height="100"/>
                    <p>{list.description}</p>
                    <p>{list.attack}</p>
                    <p>{list.defense}</p>
                    </div>)
                }
                </div>
        )
    }
}
