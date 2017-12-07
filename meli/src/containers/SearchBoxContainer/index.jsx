import React from 'react';
// import SearchBox from '../../components/SearchBox/index.jsx';
import SearchForm from '../../components/Search/index.jsx';
import Request from '../../lib/request';

const request = new Request();

class SearchBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search).get('search');
    this.state = { userInput: params || '' };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(userInput) {
    this.setState({ userInput });
  }

  render() {
    return (
      <div>
        <SearchForm onInput={this.handleInput} userInput={this.state.userInput} />
      </div>
    )
  }
}

export default SearchBoxContainer;
