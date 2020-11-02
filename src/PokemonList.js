import React, { Component } from 'react';
import './data.js';
import PokemonItem from './PokemonItem.js';

export default class PokemonList extends Component {
    render() {
       
   //WRAP ENTIRE POKEMON LIST IN A LIST TO USE ON CLICK LINKING TO THE DETAILS PAGE!!!!! PUT TELM
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
