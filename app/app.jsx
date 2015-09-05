import React from 'react';

class Application extends React.Component {
  render() {
    return <h1>{"Hello world!"}</h1>;
  }
}


window.onload = () => {
    React.render(React.createElement(Application), document.body);
}
