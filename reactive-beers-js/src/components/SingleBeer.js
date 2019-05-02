import React from "react";
import Header from './Header'
import { Link } from "react-router-dom";

const SingleBeer = (props) => {
  return (

      <div className='beer-card'>
        <img   style={{ maxHeight: "20vh" }}  src={props.beer.image_url}/>
        <h3>{props.beer.name}</h3>
        <p>{props.beer.tagline}</p>
        <Link to= {"/beers/"+ props.beer._id}>Beer Details</Link> 
      </div>
  );
};
export default SingleBeer;