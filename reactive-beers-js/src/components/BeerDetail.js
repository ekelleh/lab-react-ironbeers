import React from "react";
import Header from './Header'
import { Link } from "react-router-dom";
import axios from "axios";

class BeerDetail extends React.Component {

  state = {
    beer: []
  }
  
  componentDidMount() {
    const beerId= this.props.match.params.beerId
    axios.get("https://ironbeerapi.herokuapp.com/beers/single/"+beerId).then(response => {
      this.setState({
        beer: response.data
      });
    });
  }

  render() {

  return (
    <React.Fragment>
      <h1>What a Lovely Beer! </h1>
      <div className='beer-card-detail'>
        <img style={{ maxHeight: "40vh" }}  src={this.state.beer.image_url}/>
        <h2>{this.state.beer.name}</h2>
        <p>Tagline: {this.state.beer.tagline}</p>
        <p>First Brewed in: {this.state.beer.first_brewed}</p>
        <p>Description: {this.state.beer.description}</p>
        <p>Attenuation Level: {this.state.beer.attenuation_level}</p>
        <p>Contributed by: {this.state.beer.contributed_by}</p>


      </div>
     </React.Fragment>
  );
}
};

export default BeerDetail;