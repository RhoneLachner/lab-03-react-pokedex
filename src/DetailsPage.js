import React, { Component } from 'react'
// import PokemonList from './PokemonList'
// import PokemonDataProp from 'PokemonList.js'
// import PokemonItem from 'PokemonItem.js'

export default class DetailsPage extends Component {
    
    state = {
        list: [],
    }
    
        componentDidMount = async () => {
           
       
        
            const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemon}
            `)
            this.setState({ list : data.body.results }) 
        }
    
    
    
    
    render() {
        return (
            <div>

                <h1>{this.props.match.params.pokemon}</h1>
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
