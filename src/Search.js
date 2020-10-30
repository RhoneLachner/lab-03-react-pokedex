import React, { Component } from 'react'
import './App.css';

export default class Search extends Component {
    render() {
        return (
            <div className='SearchDiv'>
                <>
                <input placeholder='Search Pokemon by Name' onChange={this.props.handleSearchChange}/>
                {/* <button onClick={this.handleClick}>🔍</button> */}
                </>
            </div>
        )
    }
}
