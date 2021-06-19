import React, { Component } from 'react';

class NewPerson extends Component {
  constructor(props){
    super(props)
    this.state ={
      id: 99,
      first: "",
      last: "",
      city: "",
      country: "",
      employer: "",
      title: "",
      favoriteMoviesOne: "",
      favoriteMoviesTwo: "",
      favoriteMoviesThree: "",
      
    }
  }

 handleChange = (e) => {
   this.setState({
     [e.target.id]: e.target.value
   })
 }

 onSubmit = () => {
   const { first, last, city, country, employer, title, favoriteMoviesOne, favoriteMoviesTwo, favoriteMoviesThree} = this.state;

   let name = {first, last};

   let favoriteMovies = {favoriteMoviesOne, favoriteMoviesTwo, favoriteMoviesThree};
   
   let newPerson = { name, city, country, employer, title, favoriteMoviesOne, favoriteMoviesTwo, favoriteMovies};
   

   this.props.handleAdd(newPerson);
   // call this on submit function on this component

   this.setState({addingPerson: false})

 }

  

  render(){
    console.log(this.state);
    return(
      <section class="people_card">
        <label>First Name:</label>
        <input  onChange={(e) => this.handleChange(e)}placeholder="John" id="first"></input>

        <label>Last Name:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="Doe" id="last"></input>
        <br></br>

        <label>City:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="eagle mountain" id="city"></input>

        <label>Country:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="usa" id="country"></input>
        <br></br>

        <label>Title:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="pizza guy" id="title"></input>

        <label>Employer:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="chucky cheese" id="employer"></input>
        <br></br>

        <label>Favorite Movie One:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="Movie one" id="favoriteMoviesOne"></input>

        <label>Favorite Movie Two:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="Movie Two" id="favoriteMoviesTwo"></input>

        <label>Favorite Movie Three:</label>
        <input onChange={(e) => this.handleChange(e)}placeholder="Movie Three" id="favoriteMoviesThree"></input>
      <br></br>
        <button onClick={() => this.onSubmit()}>Submit</button>


      </section>
    )
  }
}

export default NewPerson;