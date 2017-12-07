import React from 'react';

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
        <h1>hola</h1>
        <input type="text" value={this.props.userInput} name="search" placeholder="Nunca dejes de buscar" onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchForm;
