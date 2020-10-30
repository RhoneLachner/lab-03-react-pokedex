

import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Header from './Header.js';
import Footer from './Footer.js';
import ListPage from './ListPage.js';
import HomePage from './HomePage.js';
import FetchPage from './FetchPage';
import './App.css';

export default class App extends React.Component {
 

// handleChangeDescription = (e) => {
//   this.setState({
//       description: e.target.value,
//   });
// }
// handleChangeType_1 = e => {
//   this.setState({
//       defense: e.target.value,
//   });
// }

render() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route
        path='/'
        exact
        render={(routerProps) => <HomePage {...routerProps} />}
        />
        <Route 
         path='/search'
         exact
         render={(routerProps) => <ListPage className='pokemon-borders' {...routerProps} />}
         />
         {/* <Route 
         path='/fetch'
         exact
         render={(routerProps) => <FetchPage {...routerProps} />}
          /> */}

        </Switch>
        <Footer />
      </Router>
        

    </div>
  );
}
}
