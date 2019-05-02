import React, { Component } from 'react'
import SingleBeer from './SingleBeer'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Header from './Header'
import axios from "axios";

class BeerList extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ironbeerapi.herokuapp.com/beers/all").then(response => {
      this.setState({
        beers: response.data
      });
    });
  }

render() {

  console.log(this.state) 

  return (

    <React.Fragment>
    
      <Header />

      <h1>Check out all these beers!</h1>

      <div className='beer-container'>

      {this.state.beers.map((beer, index) => (
         <SingleBeer beer={beer}/>
      ))}
    </div> 

    </React.Fragment>
  )
}
}

export default BeerList; 
