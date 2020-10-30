import React, { Component } from 'react'
import './App.css';

export default class Search extends Component {
    render() {
        return (
            <div className='SearchDiv'>
                <>
                <input onChange={this.props.handleSearchChange}/>
                </>
            </div>
        )
    }
}
