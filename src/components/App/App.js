import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Information from '../Information/Information';

class App extends Component {

  state = {
    user: {
      name: 'Scott',
      city: 'Mpls',
    }
  }

  handleUserChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      },
    })
  }
  handleCityChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        city: event.target.value,
      },
    })
  }




  render() {
    return (
      <div className="App">
        <Header />
        State is: {JSON.stringify(this.state)} 
        <br />
        {this.state.user.name} is from {this.state.user.city}
        <br />
        <input value={this.state.user.name} onChange={this.handleUserChange} />
        <input value={this.state.user.city} onChange={this.handleCityChange} />
        <Information />
      </div>
    );
  }
}

export default App;
