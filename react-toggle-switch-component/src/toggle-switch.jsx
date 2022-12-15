import React from 'react';

export class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { positionOn: false };
  }

  handleClick() {
    this.setState({
      positionOn: !this.state.positionOn
    });
  }

  render() {
    if (this.state.positionOn) {
      return (
        <div>
          <input type="checkbox" id="switch" onClick={() => this.handleClick()}/>
          <label htmlFor="switch"></label>
          <span id="on">On</span>
        </div>
      );
    } else {
      return (
        <div>
          <input type="checkbox" id="switch" onClick={() => this.handleClick()} />
          <label htmlFor="switch"></label>
          <span id="on">Off</span>
        </div>
      );
    }
  }
}
