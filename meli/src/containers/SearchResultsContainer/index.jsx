import React from 'react';
import ResultList from '../../components/ResultList/index.jsx';
import SearchBox from '../../components/SearchBox/index.jsx';
import Request from '../../lib/request';

const request = new Request();

class SearchResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search).get('search');
    this.state = {
      items: [],
      showResult: false,
      userInput: params || '',
    };
    // this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    console.info('SearchResultsContainer did mount');
    // this.setState({ showResult: true });
    request.get(this.state.userInput)
      .then((data) => {
        console.log('DATA handleSubmit: ', data);
        this.setState({
          items: data.items,
          showResult: true,
        });
      });
  }

  // handleInput(userInput) {
  //   this.setState({ userInput });
  // }

  render() {
    return (
      <ResultList items={this.state.items} showResult={this.state.showResult} />
    );
  }
}

export default SearchResultsContainer;
