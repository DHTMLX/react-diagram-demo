import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="dhx_sample-controls">
        <button className="dhx_sample-btn dhx_sample-btn--flat" onClick={this.props.onClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
