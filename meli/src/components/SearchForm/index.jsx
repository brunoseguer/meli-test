import React from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.userInput);
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.handleChange} />
        <Link to={{
            pathname: '/items',
            search: `?search=${this.state.userInput}`,
          }} >Submit</Link>
      </div>
    );
  }
  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <input type="text" value={this.state.userInput} onChange={this.handleChange} />
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
  // }
}

export default SearchForm;
