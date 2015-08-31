/* @flow */

import React from 'react';
import _ from 'lodash';

class Button extends React.Component {
  propTypes: {
    text: React.PropTypes.string.isRequired
  }

 constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: "purple",
        height: "100px",
        width: "100px"
      }
    };
  }

  render() {
   return (
     <div style={this.state.style} onClick={this.handleClick.bind(this)}>
      {this.props.text}
     </div>
   );
  }

  handleClick() {
    var newStyle = _.merge(this.state.style, { backgroundColor: "yellow" })
    this.setState({
      style: newStyle
    })
  }
}

export default Button;
