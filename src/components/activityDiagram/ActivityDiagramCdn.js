import React, { Component } from "react";
import Button from "../button/Button";
import fromCDN from "from-cdn";

const defaults = {
  start: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16,
  },
  end: {
    fill: "#FE9998",
    stroke: "#FE9998",
    fontColor: "#FFF",
    lineHeight: 16,
  },
  process: {
    fill: "#478D99",
    stroke: "#478D99",
    fontColor: "#FFF",
    lineHeight: 16,
  },
  decision: {
    fill: "#F7D768",
    stroke: "#F7D768",
    fontColor: "#FFF",
    lineHeight: 16,
  },
  document: {
    fill: "#478D99",
    stroke: "#478D99",
    fontColor: "#FFF",
    lineHeight: 16,
  },
};

class ActivityDiagramCdn extends Component {
  constructor(props) {
    super(props);

    this.runEditor = this.runEditor.bind(this);
    this.applyButton = this.applyButton.bind(this);
    this.resetButton = this.resetButton.bind(this);

    this.state = {
      collapsed: true,
    };

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram("diagram", {
        lineGap: 30,
        defaults,
      });

      this.diagram.data.load("./static/activity.json");

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        controls: { autoLayout: false },
        lineGap: 30,
      });

      this.editor.events.on("ApplyButton", this.applyButton);
      this.editor.events.on("ResetButton", this.resetButton);
    });
  }

  componentWillUnmount() {
    this.diagram && this.diagram.destructor();
  }

  runEditor() {
    this.setState({ collapsed: false });
    this.editor.import(this.diagram);
  }

  applyButton() {
    this.setState({ collapsed: true });
    this.diagram.data.parse(this.editor.serialize());
  }

  resetButton() {
    this.setState({ collapsed: true });
  }

  render() {
    const isCollapsed = this.state.collapsed;
    return (
      <div className="dhx-container_inner">
        {isCollapsed && <Button name="Edit" onClick={this.runEditor} />}
        <div className="dhx_sample-container__without-editor" style={isCollapsed ? {} : { display: "none" }}>
          <div className="dhx_sample-widget" id="diagram"></div>
        </div>
        <div className="dhx_sample-container__with-editor" style={isCollapsed ? { display: "none" } : {}}>
          <div className="dhx_sample-widget" id="editor"></div>
        </div>
      </div>
    );
  }
}

export default ActivityDiagramCdn;
