import React from 'react';

export class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa-solid fa-x',
      text: 'A password is required.'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    if (event.target.value === '') {
      this.setState({
        text: 'A password is required.',
        icon: 'fa-solid fa-x'
      });
    } else if (event.target.value.length < 8) {
      this.setState({
        text: 'Your password is too short.',
        icon: 'fa-solid fa-x'
      });
    } else if (event.target.value.length >= 8) {
      this.setState({
        text: '',
        icon: 'fa-solid fa-check'
      });
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="password">
          Password
        </label>
        <input type="password" name="password" id="password" onChange={this.handleInputChange}></input>
        <i className={this.state.icon}></i>
        <p>{this.state.text}</p>
      </form>
    );
  }
}
