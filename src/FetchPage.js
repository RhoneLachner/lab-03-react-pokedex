import React, { Component } from 'react'
import fetch from 'superagent';

export default class FetchPage extends Component {
// state={
//     list: null,
//     pokemon: [],
//     description: [],
//     attack: [],
//     defense: [],
//     query: '',
//                 }


//     // componentDidMount = async() => {
//     //     const data = await fetch.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
//     //     this.setState({ pokemon : fetch.data.body }) 

//     //     await this.fetchData();
//     // }


//     // handleChange = (e) => {
//     //     this.setState({ query: e.target.value });
//     // }



//     componentDidMount = async() => {
//         await this.handleClick();
//     }


//     handleClick = async () => {
//         const query = this.state.query;
//         const data = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)


//         console.log(data.body);

//         this.setState({ pokemon: data.body })

//     }





//     render() {
//         return (
          
//     //    <ul>

//     //         {
//     //             this.state.pokemon.length && this.state.quotes.map(pokemon =>
//     //                 <li className='pokemon-item'>{pokemon}</li>)
//     //         }
//     //    </ul>
       

//        <main>
//        <p>Search Pokemon:</p>
//        <input onChange={this.handleChange} name="search" />
//        <button onClick={this.handleClick}>🔍</button>

//        <ul className="pokemon">
//            {
//                this.state.pokemon.length && this.state.pokemon.map(pokemon => <li className="pokemon-item"> {pokemon.pokemon} </li >)
//            }
//        </ul>
//    </main >
            
//         );
//     }
// }
}
