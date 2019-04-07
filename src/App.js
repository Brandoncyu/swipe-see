import React, { Component } from 'react';
import {expediaAllEvents} from './models/models'
import 'bootstrap/dist/css/bootstrap.min.css'
import InputForm from './components/InputForm'
import Swipe from './components/Swipe'
import CitiesList from './components/CitiesList'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      activities: [],
      destination: 'Atlanta',
      formOn: true,
      cities: []
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
    const cities = [...this.state.cities, this.state.destination]
    this.setState({
      activities: response.activities,
      formOn: false,
      cities
    })
  }

  backToCity = async (city) =>{
    console.log(city)
    const response = await expediaAllEvents(city)
    this.setState({
      activities: response.activities,
      formOn: false
    })
  }

  backToForm = () =>{
    this.setState({
      activities: [],
      destination: 'Atlanta',
      formOn: true
    })
  }

  render() {
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
        {this.state.formOn && this.state.cities.length > 0 && <CitiesList  cities={this.state.cities}
        backToCity={this.backToCity}
        />}
      </div>
    );
  }
}

export default App;
