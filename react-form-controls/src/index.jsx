import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handlePasswordChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    console.log('State: ', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username
            <input name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
          </label>
          <label htmlFor="password">
            Password
            <input name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const form = (
  <RegistrationForm />
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(form);
