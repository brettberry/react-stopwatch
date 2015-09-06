import React from 'react';
import moment from 'moment';

export default class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0
    };
    this.interval = null;
  }

  updateTimer() {
    this.setState({
      time: this.state.time + 10
    });
  }

  startTimer() {
    this.interval = setInterval(::this.updateTimer, 10);

  }

  stopTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.setState({
      time: 0
    });
  }

  render() {
    var fancyTime = moment(this.state.time).format('mm:ss:SS');
    return (
      <div>
          <h1>{fancyTime}</h1>
          <button onClick={::this.startTimer}>Start</button>
          <button onClick={::this.stopTimer}>Stop</button>
          <button onClick={::this.resetTimer}>Reset</button>
      </div>
    );
  }

}
