import React, { Component } from 'react';
import './data.js';
import PokemonItem from './PokemonItem.js';

export default class PokemonList extends Component {
    render() {
        const filtered = this.props.pokemonDataProp.filter((item) => {
        if (!this.props.searchTerm) return true;
        if (item.pokemon === this.props.searchTerm) return true;
        return false;
        })

        .sort((item) => {


        })

    //     const filtered = this.props.pokemonDataProps.filter((id) => {
    //     if (!this.props.pokemon) return true;
    //     if (id.pokemon === this.props.pokemon) return true;
    //     return false;
    // })
    //     .filter((id) => {
    //         if (!this.props.url_image) return true;
    //         if (id.url_image === +this.props.url_image) return true;
    //         return false;
    // })
    //     .filter((id) => {
    //         if (!this.props.type_1) return true;
    //         if (id.type_1 === +this.props.type_1) return true;
    //         return false;
    // })
    //     .filter((id) => {
    //         if (!this.props.attack) return true;
    //         if (id.attack === +this.props.attack) return true;
    //         return false;
    // })
    //     .filter((id) => {
    //         if (!this.props.defense) return true;
    //         if (id.defense === +this.props.defense) return true;
    //         return false;
    // })
   
     return (
        <div className='PokemonList'>
        {
            filtered.map (id =>
            <PokemonItem
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
