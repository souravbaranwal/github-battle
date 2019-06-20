import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    handleChange = (event) => {
        let value = event.target.value;

        this.setState(() => {
            return {username: value}
        })
    }
   
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.props.id, this.state.username)
    }
    render() {
        return (
            <form className='column'onSubmit={this.handleSubmit}>
                <label className='header' htmlFor="username">
                    {this.props.label}
                </label>
                <input type="text" name="" id="username" autoComplete='off' placeholder='github username' value={this.state.username} onChange={this.handleChange} />
                <button className='button' type='submit' disabled={!this.state.username}>
                    Submit</button>
            </form>
        );
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
}



class Battle extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null,
        })
    }

    handleSubmit = (id, username) => {
        this.setState(
            () => {
                let newState = {};
                newState[id + 'Name'] = username;
                newState[id + 'Image'] = 'https://github.com' + username + '.png?size=200';
                return newState;
            }
        )
    }    
    render() {
        let playerOneName = this.state.playerOneName;
        let playerTwoName = this.state.playerTwoName;
        return (
            <div>
                <div className="row">
                     {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit= {this.handleSubmit}/>}
                     {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit= {this.handleSubmit}/>}
                </div>
            </div>
        );
    }
}

export default Battle;