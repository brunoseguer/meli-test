import React from 'react';
// import SearchBox from '../../components/SearchBox/index.jsx';
import SearchForm from '../../components/Search/index.jsx';
// import Logo from '../../components/Logo/logo.jsx';
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
      <header className="search">
        <SearchForm onInput={this.handleInput} userInput={this.state.userInput} />
      </header>
    );
  }
}

export default SearchBoxContainer;
