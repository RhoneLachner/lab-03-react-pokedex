import React, { Component } from 'react';
import PokemonList from './PokemonList.js';

export default class Dropdown extends Component {
    render() {
        return (
            <div>
                
            <select onChange={this.handleChange} className="dropdown">
            <option value=''>All Pokemon</option>
        <option value='pokemon'>{Map.name}</option>
             </select>

             <select onChange={this.handleChange} className="dropdown2">
            <option value=''>All Pokemon Element Types</option>
        <option value='pokemon'>{Map.type_1}</option>
             </select>

             <select onChange={this.handleChange} className="dropdown3">
            <option value=''>All Pokemon Attack Types</option>
        <option value='pokemon'>{Map.attack}</option>
             </select>

             <select onChange={this.handleChange} className="dropdown4">
            <option value=''>All Pokemon Defense Types</option>
        <option value='pokemon'>{Map.defense}</option>
             </select>
             
            </div>
        )
    }
}
