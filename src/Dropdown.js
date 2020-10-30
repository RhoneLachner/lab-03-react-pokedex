import React, { Component } from 'react';
import './App.css';



export default class Dropdown extends React.Component {
    render() {
        return (
            <div className='drop-down'>
            <select onChange={this.props.handleChangeOrder}>
                <option value=''>Sort by... </option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
           
            </select>
            <select 
            className='descriptiom-dropdown' 
            defaultValue={this.props.selectedDescription} 
            onChange={this.props.handleChangeDescription}
            >
                <option className='description-list-all' value=''>All Categories</option>
                <option value ='pokemon'>Name A-Z or Z-A</option>
                <option value='attack'>Attack</option>
                <option value ='defense'>Defense</option>
                <option value ='type_1'>Type</option>
                
            {/* {
                getUniqueDescription(this.props.list).map((description, list) =>
               <option className='description-list' value={description} key={list}>{description}</option> )
            } */}

            </select>

        </div>  
 
            
        )
    }

}




