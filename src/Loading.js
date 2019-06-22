import React, { Component } from "react";
import { Loader } from "react-bulma-components/full";

class Loading extends Component {
  render() {
    return (
      <div className='loader-parent'>
        <Loader
          style={{
            width: 300,
            height: 300,
            border: "4px solid blue",
            borderTopColor: "transparent",
            borderRightColor: "transparent"
          }}
        />
      </div>
    );
  }
}

export default Loading;
