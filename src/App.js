import React, { Component } from 'react';
import {expediaAllEvents} from './models/models'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputForm from './components/InputForm'
import Swipe from './components/Swipe'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activities: [],
      destination: 'atlanta',
      formOn: true
    }
  }

  changeCity = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getEvents = async (e) => {
    e.preventDefault()
    const response = await expediaAllEvents(this.state.destination)
    this.setState({
      activities: response.activities,
      formOn: false
    })
  }

  backToForm = () =>{
    this.setState({
      activities: [],
      destination: 'atlanta',
      formOn: true
    })
  }

  render() {
    console.log(this.state.destination)
    return (
      <div className="App">
        {this.state.formOn ? <InputForm
          changeCity={this.changeCity}
          getEvents={this.getEvents}
        /> :
        <Swipe
          activities={this.state.activities}
          backToForm={this.backToForm}
        />}
      </div>
    );
  }
}

export default App;
