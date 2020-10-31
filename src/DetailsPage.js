import React, { Component } from 'react'

export default class DetailsPage extends Component {
    
    state = {
        id: [],
    
    
        componentDidMount = async () => {
            this.fetchPokemon()
        }
        fetchPokemon = async () => {
            const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchTerm}&sort=${this.state.description}&direction=${this.state.order}
            `);
            this.setState({ list : data.body.results }) 
        }
    
    
    
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
