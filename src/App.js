import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import data from './data';
import PeopleCard from './components/PeopleCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
    }
  }
  render() {
  return (
   <section>
     <Navbar />
     <PeopleCard people={this.state.people}/>
   </section>
  );
  }
}


export default App;
