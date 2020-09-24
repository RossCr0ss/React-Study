import React, {Component} from "react";

import "./search-panel.css";

export default class SeacrhPanel extends Component {
  state = {
    term: ''
  };

  onTermChange = (e) => {
    const {onSearchChange = () => {}} = this.props;
    this.setState({
      term: e.target.value
    });
    onSearchChange(e.target.value);
  }

  render() {
    return (
      <div className="search-panel">
        <input
          className="search-panel-input"
          placeholder="Type to search..."
          onChange={this.onTermChange}
          value={this.state.term}
        />
      </div>
    );
  }
}