import React from "react";
import BeerList from './BeerList'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h3>Welcome to the Reactive Beer List!</h3>

        <ul>
          <li><Link to="/beers">Beer List</Link></li>
          <li> <Link to="/random-beer">Random Beer</Link></li>
          <li>  <Link to="/new-beer">New Beer</Link></li>
        </ul>



      </div>
    </div>
  );
};
export default Home;