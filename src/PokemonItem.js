import React, { Component } from 'react'
import './data.js';


export default class PokemonItem extends Component {
    render() {
        console.log(this.props.image)
        return (
            <div className='pokemonItems'>
        
        <img className="PokemonImage" src={this.props.image} alt={this.props.url_image}/>
       
        
        <h2 className='id'>{this.props.id}</h2>
         
        
        <h2 className='pokemon'>{this.props.name}</h2>
         
        
        <h3 classname='type_1'>Type:{this.props.description}</h3>
         
        
        <h3 className="attack">Attack:{this.props.attack}</h3>
         
        
        <h3 className='defense'>Defense:{this.props.defense}</h3>
               
            </div>
        )
    }
}
