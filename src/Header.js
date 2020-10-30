import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='HeaderDiv'>
                <span>
                <h3>Pokedex</h3>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search" >Search</Link>
                    
                </li>
                {/* <li>
                    <Link to="/fetch" >Fetch</Link> 
                </li>  */}
            </ul>
            </span>
            </div>
        )
    }
}
