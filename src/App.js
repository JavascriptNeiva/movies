
import React, { Component } from 'react';
import './App.css';
import List from './components/list';
import Datasource from './api';

class App extends Component {
  async componentDidMount () {
    let { data, status } = await Datasource.getMoviesByName('batman')
    console.log(data)
    console.log(status)
  }
  render () {
    return (
      <div className="App">
        <List/>

      </div>
    )
  }
}


export default App;

