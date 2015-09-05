import React from 'react';
import Stopwatch from 'app/stopwatch';

class Application extends React.Component {

  constructor() {
    super();
  }

  render() {
      return <Stopwatch/>;
  }
}


window.onload = () => {
    React.render(React.createElement(Application), document.body);
}
