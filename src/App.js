import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {expediaSeattleAllEvents} from './models/models'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activities: []
    }
  }
  componentDidMount = async() => {
    const response = await expediaSeattleAllEvents()
    this.setState({
      activities: response.activities.slice(0,10)
    })


  }



  render() {
    console.log(this.state.activities)
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
