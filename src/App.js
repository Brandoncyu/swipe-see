import React, { Component } from 'react';
import {expediaSeattleAllEvents} from './models/models'

import Swipe from './components/Swipe'

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
      activities: response.activities
    })


  }



  render() {
    console.log(this.state.activities)
    return (
      <div className="App">
        <Swipe
          activities = {this.state.activities}
        />
      </div>
    );
  }
}

export default App;
