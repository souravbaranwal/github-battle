import React, { Component } from "react";
import Proptypes from "prop-types";
import { Columns, Column } from "bloomer";

function SelectLanguage(props) {
  const languages = ["All", "javaScript","Java", "Ruby", "CSS", "Python"];

  return (
    <Columns className="languages">
      {languages.map(language => {
        return (
          <Column className='language'
            style={
              language === props.selectedLanguage ? { color: "#d0021b" } : null
            }
            onClick={() => props.onSelect(language)}
            key={language}
          >
            {language}
          </Column>
        );
      })}
    </Columns>
  );
}

SelectLanguage.propTypes = {
  selectedLanguage: Proptypes.string.isRequired,
  onSelect: Proptypes.func.isRequired
};

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };
  }

  updateLanguage = language => {
    this.setState({
      selectedLanguage: language
    });
  };

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

export default Popular;
