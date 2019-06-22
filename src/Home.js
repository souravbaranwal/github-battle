import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home-parent">
        <h1>Github Battle: Battle with your Friends !!</h1>
        <Link className="button is-primary" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}

export default Home;
