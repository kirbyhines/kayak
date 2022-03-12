/** @format */

import './App.css';
import React, { Component } from 'react';
import Filter from './components/Filter';
import Logo from './components/Logo';
import fetchJsonp from 'fetch-jsonp';
import CardList from './components/CardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airlineData: [],
      filter: '',
      isChecked: true,
    };
  }

  // Fetch Airline Data using JSONP callback
  componentDidMount() {
    fetchJsonp('https://kayak.com/h/mobileapis/directory/airlines/homework', {
      jsonpCallback: 'jsonp',
    })
      .then((response) => {
        return response.json();
      })
      .then((json) =>
        this.setState({
          airlineData: json.map((airline) => {
            return airline;
          }),
        })
      )
      .catch(function (ex) {
        console.log('parsing failed', ex);
      });
  }
  // Log event click, and set filter state
  onInputChange = (event) => {
    this.setState({ isChecked: !this.state.isChecked });
    if (this.state.isChecked === true) {
      this.setState({ filter: event.target.value });
    } else {
      this.setState({
        filter: '',
      });
    }
  };

  render() {
    // Filter through Airline Data by Alliance
    const filteredAirlines = this.state.airlineData.filter((airlineData) => {
      return airlineData.alliance
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <div className="App">
        <Logo />

        <Filter onInputChange={this.onInputChange} />

        <CardList filteredAirlines={filteredAirlines} />
      </div>
    );
  }
}
export default App;
