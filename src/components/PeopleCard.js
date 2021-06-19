import React, { Component } from 'react';

class PeopleCard extends Component{
  constructor(props){
    super(props)
    this.state={
      currentIndex: 0,
    }
  }

  personNext = () => {
    this.setState({
      currentIndex: this.state.currentIndex + 1,
    })
  }

  personPrevious = () => {
    if(this.state.currentIndex !== 0){
      this.setState({
        currentIndex: this.state.currentIndex -1
      })
    }
  }

 
  render(){
    console.log(this.state);
    return(

    <main>
      <section class="people_card">
        <p>From: {this.props.people[this.state.currentIndex].name.first} {this.props.people[this.state.currentIndex].name.last}</p>

        <p><span>From:</span> {this.props.people[this.state.currentIndex].city}, {this.props.people[this.state.currentIndex].country}</p>
        <p>Job Title: {this.props.people[this.state.currentIndex].title}</p>
        <p>Employer: {this.props.people[this.state.currentIndex].employer}</p>
        <br></br>
        <h2>Favorite Movies</h2>
        <ol>
          <li>{this.props.people[this.state.currentIndex].favoriteMovies[0]}</li>
          <li>{this.props.people[this.state.currentIndex].favoriteMovies[1]}</li>
          <li>{this.props.people[this.state.currentIndex].favoriteMovies[2]}</li>
        </ol>
      </section>
     <section class="button-Menu">
        <button onClick={ () => this.personPrevious() }>Previous</button>
        <button onClick= { () => this.personNext()}>Next</button>
      </section> 
    </main>
    )
  }
}

export default PeopleCard;