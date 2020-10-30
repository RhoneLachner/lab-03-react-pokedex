import React, { Component } from 'react';
import './data.js';
import PokemonItem from './PokemonItem.js';

export default class PokemonList extends Component {
    render() {
       
   
     return (
        <div className='PokemonList'>
        {
            this.props.pokemonDataProp.map (id =>
            <PokemonItem className="pokemonListItems"
            
            image={id.url_image}
            name={id.pokemon}
            description={id.type_1}
            attack={id.attack}
            defense={id.defense}
          
            /> )
        }
            </div>
            
            )
    }
}
