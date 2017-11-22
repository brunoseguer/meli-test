import React from 'react';
import SearchBox from '../../components/SearchBox/index.jsx';
import Request from '../../lib/request';

const request = new Request();

class SearchBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(userInput) {
    this.setState({ userInput });
  }

  render() {
    return (
      <div>
        <SearchBox onInput={this.handleInput} userInput={this.state.userInput} />
      </div>
    )
  }
}

export default SearchBoxContainer;
