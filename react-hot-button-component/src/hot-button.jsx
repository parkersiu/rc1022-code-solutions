import React from 'react';

export class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick() {
    const count = this.state.counter + 1;
    this.setState({
      counter: count
    });
  }

  render() {
    const counter = this.state.counter;
    if (counter < 3) {
      return (
        <button style={{ backgroundColor: '#351C74', color: 'white' }} onClick={() => this.handleClick()}>Hot Button</button>
      );
    } else if (counter >= 3 && counter < 6) {
      return (
        <button style={{ backgroundColor: '#674FA7', color: 'white' }} onClick={() => this.handleClick()}>Hot Button</button>
      );
    } else if (counter >= 6 && counter < 9) {
      return (
        <button style={{ backgroundColor: '#E06666', color: 'white' }} onClick={() => this.handleClick()}>Hot Button</button>
      );
    } else if (counter >= 9 && counter < 12) {
      return (
        <button style={{ backgroundColor: '#F7B26A', color: 'black' }} onClick={() => this.handleClick()}>Hot Button</button>
      );
    } else if (counter >= 12 && counter < 15) {
      return (
        <button style={{ backgroundColor: '#FEFF00', color: 'black' }} onClick={() => this.handleClick()}>Hot Button</button>
      );
    } else if (counter >= 15) {
      return (
        <button style={{ backgroundColor: 'white', color: 'black' }} onClick={() => this.handleClick()}>Hot Button</button>
      );
    }
  }
}
