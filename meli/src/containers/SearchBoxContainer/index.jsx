import React from 'react';
import SearchBox from '../../components/SearchBox/index.jsx';
// import SearchForm from '../../components/Search/index.jsx';
import Request from '../../lib/request';

const request = new Request();

class SearchBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search).get('search');
    this.state = { userInput: params || '' };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(userInput) {
    this.setState({ userInput });
  }

  handleSubmit(input) {
    console.log('Form submited witt input: ', input);
    // request.get(input)
    //   .then((data) => {
    //     console.log('DATA handleSubmit: ', data);
    //     this.setState({ items: data.items });
    //   });
  }

  render() {
    return (
      <div>
        <SearchBox onInput={this.handleInput} userInput={this.state.userInput} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default SearchBoxContainer;
