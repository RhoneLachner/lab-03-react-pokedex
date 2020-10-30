import React, { Component } from 'react';
import './App.css';



export default class Dropdown extends React.Component {
    render() {
        return (
            <div className='drop-down'>
            <select onChange={this.props.handleChangeDescription}>
                <option value=''>Show all types</option>
                <option value='grass'>Grass</option>
                <option value='fire'>fire</option>
                <option value='water'>water</option>
                <option value='bug'>bug</option>
                <option value='normal'>normal</option>
            </select>


</div>  
 
            
        )
    }
}
