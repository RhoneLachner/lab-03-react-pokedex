import React, { Component } from 'react';
import './App.css';



export default class Dropdown extends React.Component {
    render() {
        return (
            <div className='drop-down'>
            <select onChange={this.props.handleChangeDescription}>
                <option value=''>Sort by... </option>
                <option value='ascending'>Sort A-Z</option>
                <option value='descending'>Sort Z-A</option>
           
            </select>
            <select 
            className='descriptiom-dropdown' 
            defaultValue={this.props.selectedDescription} 
            onChange={this.props.handleDescriptionSelect}
            >
                <option className='description-list-all' value=''>All Categories</option>
            {/* {
                getUniqueDescription(this.props.list).map((description, list) =>
               <option className='description-list' value={description} key={list}>{description}</option> )
            } */}

            </select>

        </div>  
 
            
        )
    }

}



// const getUniqueDescription = (list) => {
//     const arr = list.map(pokemon => pokemon.type_1);
//     return Array.from(new Set(arr));
// }

// const filterData = (data, filterCategory) => {
//     return data
//     .filter((list) => !filterCategory || (list.type_1 === filterCategory));
// }


// const sortData = (data, selectedSort) => {
//     console.log('SelectedSort', selectedSort)
//     if(selectedSort === '') {
//         return data;
//     }
//     if (selectedList === 'ascending'){
//         return data.sort((a, b) => b.list.localeCompare(a.list))
//     }
//     if (selectedSort === 'descending') {
//         return data.sort((a, b) => a.list.localeCompare(b.pokemon));
//     }
// }
