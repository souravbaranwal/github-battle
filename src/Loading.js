import React, { Component } from "react";
import { Loader } from "react-bulma-components/full";

class Loading extends Component {
  render() {
    return (
      <div className='loader-parent'>
        <p>Fetching data for you...</p>
        <Loader
          style={{
            width: 300,
            height: 300,
            border: "4px solid #3ED1B2",
            borderTopColor: "transparent",
            borderRightColor: "transparent",
            margin: "30px"
          }}
        />
      </div>
    );
  }
}

export default Loading;
