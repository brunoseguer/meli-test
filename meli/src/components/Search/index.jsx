import React from 'react';
import Logo from '../../components/Logo/logo.jsx';

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
    // e.preventDefault();
    // this.props.onSubmit(this.state.userInput);
  }

  handleChange(e) {
    this.props.onInput(e.target.value);
  }

  render() {
    return (
      <form method="get" action="/items" >
        <Logo />
        <input
          type="text"
          value={this.props.userInput}
          name="search"
          placeholder="Nunca dejes de buscar"
          onChange={this.handleChange}
        />
        <input type="submit" className="nav-search-btn" value=" " />
      </form>
    );
  }
}

export default SearchForm;
