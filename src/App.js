import React, {Component} from 'react';
import './App.css';
import Dropdown from './Dropdown';
import Header from './Header.js';
import Footer from './Footer.js';

export default class App extends React.Component {
  state = {
    image: '',
    name: '',
    description: '',
    attack: '',
    defense: '',
}

handleChangeType_1 = e => {
    this.setState({
        description: e.target.value,
    });
}
handleChangeType_1 = e => {
  this.setState({
      attack: e.target.value,
  });
}
handleChangeType_1 = e => {
  this.setState({
      defense: e.target.value,
  });
}

render() {
  return (
    <div className="App">
<Header />
<Dropdown />
<Footer />



    </div>
  );
}
}
