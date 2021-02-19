import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search-bar.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onSearchChange(event.target.value);
  }

  handleSubmit(event) {
    // preventing from refreshing the page
    event.preventDefault();

    this.props.onFormSubmit();
  }

  render() {
    const searchValue = this.props.searchValue;

    return (
      <div className="search-bar">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <button className="search-form__btn" type="submit">
            <FontAwesomeIcon icon={faSearch} color="white" />
          </button>
          <input
            className="search-form__input"
            type="text"
            id="searchBox"
            name="searchBox"
            value={searchValue}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
