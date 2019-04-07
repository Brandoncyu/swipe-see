import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {delta, routeHappyEcon} from './models/models'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }
  componentDidMount = async() => {
    const response = await routeHappyEcon()
    console.log(response)
    // if (response) {
    //   this.props.setUser()
    // }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
