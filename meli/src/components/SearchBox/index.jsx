import React from 'react';
import { Link } from 'react-router-dom';
import { stringify } from 'querystring';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInput(e.target.value);
  }

  render() {
    const { userInput } = this.props;
    return (
      <div>
        <input type="text" value={userInput} onChange={this.handleChange} />
        <Link to={{
            pathname: '/items',
            search: stringify({ search: userInput }),
          }} >Submit</Link>
      </div>
    );
  }
}

export default SearchBox;
