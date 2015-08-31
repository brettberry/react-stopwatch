import React from 'react';
import Button from 'app/Button';


class Application extends React.Component {
  render() {
    return <Button text="Hello World!"/>;
  }
}


window.onload = () => {
    React.render(React.createElement(Application), document.body);
}
