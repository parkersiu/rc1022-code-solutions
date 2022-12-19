import React from 'react';

export class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      time: 0,
      timerId: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.pause = this.pause.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.reset = this.reset.bind(this);
  }

  timer() {
    let timerId = this.state.timerId;
    timerId = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        timerId
      });
    }, 1000);
  }

  pause() {
    clearInterval(this.state.timerId);
  }

  toggleStatus() {
    this.setState({
      play: !this.state.play
    });
  }

  reset() {
    if (!this.state.play) {
      clearInterval(this.timerId);
      this.setState({
        time: 0
      });
    }
  }

  handleClick() {
    if (!this.state.play) {
      this.toggleStatus();
      this.timer();
    } else {
      this.toggleStatus();
      this.pause();
    }
  }

  render() {
    if (this.state.play) {
      return (
        <div>
          <div className="circle" onClick={() => this.reset()}>
            <span id="time">{this.state.time}</span>
          </div>
          <i className="fa-solid fa-pause fa-3x" onClick={() => this.handleClick()}></i>
        </div>
      );
    } else {
      return (
        <div>
          <div className="circle" onClick={() => this.reset()}>
            <span id="time">{this.state.time}</span>
          </div>
          <i className="fa-sharp fa-solid fa-play fa-3x" onClick={() => this.handleClick()}></i>
        </div>
      );
    }
  }
}
