import React, { Component } from "react";
import fromCDN from "from-cdn";
import Button from "../button/Button";
import "./DefaultEditorCustomShape.css";

import { networkData } from "../../static/data";

class DefaultEditorCustomShape extends Component {
  constructor(props) {
    super(props);

    this.runEditor = this.runEditor.bind(this);
    this.applyButton = this.applyButton.bind(this);
    this.resetButton = this.resetButton.bind(this);

    this.defaults = {
      width: 160,
      height: 160,
      img: "./common/img/network/desktop.svg",
      text: "Network Card",
      ip: "138.68.41.78",
      preview: {
        scale: 0.8,
      },
    };
    this.path = "./common/img/network/";

    this.state = {
      collapsed: true,
    };

    this.ready = fromCDN([
      "https://webix.io/dev/dhtmlx/diagram/diagram_4.0/codebase/diagramWithEditor.css",
      "https://webix.io/dev/dhtmlx/diagram/diagram_4.0/codebase/diagramWithEditor.js",
    ]);
  }

  componentDidMount() {
    this.ready.then(() => {
      const core = { type: "networkCard", img: this.path + "core.svg" };
      const server = { type: "networkCard", img: this.path + "server.svg" };
      const cloud = { type: "networkCard", img: this.path + "cloud.svg" };
      const user = { type: "networkCard", img: this.path + "fieldworker.svg" };
      const desktop = { type: "networkCard", img: this.path + "desktop.svg" };

      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram("diagram", {
        type: "default",
        lineGap: 20,
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        controls: { autoLayout: false },
        shapeSections: {
          "Network Shapes": [core, server, cloud, user, desktop],
        },
        shapeBarWidth: 320,
        lineGap: 20,
      });

      this.diagram.addShape("networkCard", {
        template: this.template,
        defaults: this.defaults,
      });

      this.editor.diagram.addShape("networkCard", {
        template: this.template,
        defaults: this.defaults,
        properties: [
          { type: "arrange" },
          { type: "img", label: "Photo" },
          { type: "text" },
          { type: "text", label: "IP", property: "ip" }
        ]
      });

      this.editor.events.on("ApplyButton", this.applyButton);
      this.editor.events.on("ResetButton", this.resetButton);

      this.diagram.data.parse(networkData);
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

  template({ img, text, ip }) {
    return `
      <section class="dhx-diagram-demo_network-card">
        <img src="${img}" alt="${text}"></img>
        <span>${text}</span>
        <span>${ip}</span>
      </section>
    `;
  }

  render() {
    const isCollapsed = this.state.collapsed;
    const css = isCollapsed
      ? "dhx-container_inner dhx_sample-container__without-editor"
      : "dhx-container_inner dhx_sample-container__with-editor";

    return (
      <div className={css}>
        {isCollapsed && <Button name="Edit" onClick={this.runEditor} />}
        <div className="dhx_sample-widget" id="diagram" style={isCollapsed ? {} : {display: "none"}}></div>
        <div className="dhx_sample-widget" id="editor" style={isCollapsed ? {display: "none"} : {}}></div>
      </div>
    );
  }
}

export default DefaultEditorCustomShape;
