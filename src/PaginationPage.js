import React, { Component } from 'react'

export default class PaginationPage extends Component {

    state = {
        pokemon: [],
        character: 'fry',
        loading: false,
        pageNumber: 1,
        count: 1
    }


  
    componentDidMount = async () => {
        this.fetchPokemon()
    }
    fetchPokemon = async () => {
        const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20pokemon=${this.state.searchTerm}&sort=${this.state.description}&direction=${this.state.order}
        `);
        this.setState({ list : data.body.results }) 
    }


    handleSearchChange = e => {
        this.setState({
            searchTerm: e.target.value,
        });
    
    }

    handleChangeDescription = async (e) => {
    await this.setState({
        description: e.target.value,
      });
      this.fetchPokemon()
      console.log(e.target.value)
      
    }

    handleChange = e => {
      this.setState({
        filter: e.target.value
      });
    }



    handleChangeOrder= async (e) => {
        await this.setState({
            order: e.target.value,
          });
          this.fetchPokemon()
          console.log(e.target.value)
          
        }

        handleClick = async (quote) => {
          // how can i get the character that i clicked on?
          this.props.history.push(`/quotes/${quote.character}`);
        }

  






    render() {
        return (
            <div>
                
            </div>
        )
    }
}

