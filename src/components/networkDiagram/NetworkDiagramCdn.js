import React, { Component } from "react";
import Button from "../button/Button";
import fromCDN from "from-cdn";
import "./NetworkDiagramCdn.css";

const defaults = {
  width: 160,
  height: 160,
  img: "../common/img/network_image/desktop.svg",
  text: "Network Card",
  ip: "138.68.41.78",
  preview: {
    scale: 0.8,
  },
};

class NetworkDiagramCdn extends Component {
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
        lineGap: 20,
      });

      this.diagram.data.load("./static/networkDiagram.json");

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        controls: { autoLayout: false },
        shapeSections: {
          "network shape": ["networkCard"],
          "flowchart shapes": [true],
        },
        lineGap: 20,
      });

      this.diagram.addShape("networkCard", {
        template: this.template,
        defaults,
      });
      this.editor.diagram.addShape("networkCard", {
        template: this.template,
        defaults,
        properties: [{ type: "arrange" }, { type: "img", label: "photo" }, { type: "text" }, { type: "text", label: "IP", property: "ip" }],
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

  template(config) {
    return `
      <section class="dhx-diagram-demo_network-card">
        <img src="${config.img}" alt="${config.text}"></img>
        <span>${config.text}</span>
        <span>${config.ip}</span>
      </section>
    `;
  }

  render() {
    const isCollapsed = this.state.collapsed;
    return (
      <div className="dhx-container_inner">
        {isCollapsed && <Button name="Edit" onClick={this.runEditor} />}
        <div className="dhx_sample-container__without-editor" style={isCollapsed ? {} : { display: "none" }}>
          <div className="dhx_sample-container__widget overflow_hidden" id="diagram"></div>
        </div>
        <div className="dhx_sample-container__with-editor" style={isCollapsed ? { display: "none" } : {}}>
          <div className="dhx_sample-widget" id="editor"></div>
        </div>
      </div>
    );
  }
}

export default NetworkDiagramCdn;
