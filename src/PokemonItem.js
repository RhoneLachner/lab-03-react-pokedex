import React, { Component } from 'react'
import './data.js';


export default class PokemonItem extends Component {
    render() {
        console.log(this.props.image)
        return (
            <div>
        <img className="PokemonItem" src={this.props.image} alt={this.props.url_image}/>
        <h2 className='id'>{this.props.id}</h2>
        <h2 className='pokemon'>{this.props.pokemon}</h2>
        <h2 classname='type_1'>Type:{this.props.description}</h2>
        <h2 className="attack">Attack:{this.props.attack}</h2>
        <h2 className='defense'>Defense:{this.props.defense}</h2>
                
            </div>
        )
    }
}
