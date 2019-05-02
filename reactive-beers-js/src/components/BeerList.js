import React, { Component } from 'react'
import SingleBeer from './SingleBeer'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'
import Header from './Header'

class BeerList extends Component {
  render() {
    return (
      <React.Fragment>

        <Header />

        <h1>There will be a Beer List here</h1>


      </React.Fragment>
    )
  }
}

export default BeerList; 
