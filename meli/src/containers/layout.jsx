import React from 'react';
import SearchForm from '../components/SearchForm/index.jsx';
import ResultList from '../components/ResultList/index.jsx';
import Request from '../lib/request';

const request = new Request();

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.info('Layout did mount');
    console.info('Match received: ', this.match);
  }

  handleSubmit(input) {
    request.get(input)
      .then((data) => {
        console.log('DATA handleSubmit: ', data);
        this.setState({ items: data.items });
      });
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.handleSubmit} />
        <ResultList items={this.state.items} />
      </div>
    )
  }
}

export default Layout;
