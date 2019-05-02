import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='App-header'>
      <h3> <li><Link to="/">Home</Link></li></h3>
    </div>
  );
};
export default Header;