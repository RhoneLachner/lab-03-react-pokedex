import React, { Component } from 'react'
import './data.js';
import { Link } from 'react-router-dom'


export default class PokemonItem extends Component {
    render() {
        
        return (
            <div className='pokemon-items'>
        <Link to={`details/${this.props.name}`}>
        <img className="PokemonImage" src={this.props.image} alt={this.props.url_image}/>
       
        <h2 className='id'>{this.props.id}</h2>
        <h2 className='pokemon'>{this.props.name}</h2>  
        <p classname='type_1'>Type:{this.props.description}</p>  
        <p className="attack">Attack:{this.props.attack}</p>    
        <p className='defense'>Defense:{this.props.defense}</p>
        </Link>     
        </div>
        )
    }
}
