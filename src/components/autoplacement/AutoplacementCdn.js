import React, { Component } from "react";
import fromCDN from "from-cdn";

class AutoplacementCdn extends Component {
  constructor(props) {
    super(props);

    this.runDirect = this.runDirect.bind(this);
    this.runEdges = this.runEdges.bind(this);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram("diagram");

      this.diagram.data.load("./static/autoplacement.json");
    });
  }

  componentWillUnmount() {
    this.diagram && this.diagram.destructor();
  }

  runDirect() {
    this.diagram.autoPlace({
      mode: "direct",
    });
  }

  runEdges() {
    this.diagram.autoPlace({
      mode: "edges",
    });
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <div className="dhx_sample-controls">
          <label className="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_form-group dhx_sample-input__wrapper--pl-16">
            <input id="direct" type="radio" name="radio" value="direct" className="dhx_radiobutton__input" onChange={this.runDirect} />
            <span className="dhx_radiobutton__visual-input"></span>
            <span className="dhx_label">Auto layout in direct mode</span>
          </label>
          <label className="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
            <input id="edges" type="radio" name="radio" value="edges" className="dhx_radiobutton__input" onChange={this.runEdges} />
            <span className="dhx_radiobutton__visual-input"></span>
            <span className="dhx_label">Auto layout in edges mode</span>
          </label>
        </div>
        <div className="dhx_sample-container">
          <div className="dhx_sample-container__widget" id="diagram"></div>
        </div>
      </div>
    );
  }
}

export default AutoplacementCdn;
