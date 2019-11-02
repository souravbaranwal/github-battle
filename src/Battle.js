import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PlayerPreview from "./PlayerPreview";

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleChange = event => {
    var username = event.target.value;
    this.setState(function() {
      return {
        username: username,
      };
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.username);
  };
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          type="text"
          id={this.props.id}
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="github username"
          autoComplete="off"
        />
        <button
          className="button is-primary"
          type="submit"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(function() {
      var newState = {};
      newState[id + "Name"] = username;
      newState[id + "Image"] =
        "https://github.com/" + username + ".png?size=200";

      return newState;
    });
  }
  handleReset(id) {
    this.setState(function() {
      var newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;

      return newState;
    });
  }

  render() {
    var match = this.props.match;
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;
    var playerOneImage = this.state.playerOneImage;
    var playerTwoImage = this.state.playerTwoImage;

    return (
      <div className="battle">
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />
          )}

          {playerOneImage !== null && (
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <button
                className="button is-primary"
                onClick={this.handleReset.bind(null, "playerOne")}
              >
                Reset
              </button>
            </PlayerPreview>
          )}

          {!playerTwoName && (
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />
          )}

          {playerTwoImage !== null && (
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <button
                className="button is-primary"
                onClick={this.handleReset.bind(null, "playerTwo")}
              >
                Reset
              </button>
            </PlayerPreview>
          )}
        </div>
        {playerOneImage && playerTwoImage && (
          <Link
            className="button"
            to={{
              pathname: match.url + "/results",
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}
export default Battle;