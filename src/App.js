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
  handleAdd = (newPerson)=> {
    const { people } = this.state;
    this.setState({ people: [...people, newPerson]})
  }
  render() {
  return (
   <section>
     <Navbar />
     <PeopleCard people={this.state.people} handleAdd={this.handleAdd}/>
   </section>
  );
  }
}


export default App;
