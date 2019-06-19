import React, { Component } from 'react';
import Proptypes from 'prop-types';

class SelectLanguage extends Component {
    
    render() {
        const languages = ['All', 'javaScript', 'Ruby', 'CSS', 'Python']

        return (
            <ul className="languages">
            {languages.map(language => {
                return <li
                style={language === this.props.selectedLanguage ? {color: '#d0021b'}: null}
                onClick={() => this.props.onSelect( language)}
                key={language}
                >{language}</li>
            })}
        </ul>
        )
    }
}

SelectLanguage.propTypes = {
    selectedLanguage: Proptypes.string.isRequired,
    onSelect: Proptypes.func.isRequired,
}


class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedLanguage: 'All'
         };
    }

    updateLanguage = (language) => {
        this.setState(
            {
                selectedLanguage: language
            }
        );
    }

    render() {

        return (
           <div>
               <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
           </div>
        );
    }
}

export default Popular;