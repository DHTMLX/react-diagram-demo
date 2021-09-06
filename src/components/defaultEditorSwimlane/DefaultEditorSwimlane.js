import React, { Component } from "react";
import fromCDN from "from-cdn";
import Button from "../button/Button";

import { simlaneExport } from "../../static/data";

class DefaultEditorSwimlane extends Component {
  constructor(props) {
    super(props);

    this.runEditor = this.runEditor.bind(this);
    this.applyButton = this.applyButton.bind(this);
    this.resetButton = this.resetButton.bind(this);

    this.defaults = {
      start: {
        fill: "#F35A4F",
        stroke: "#F35A4F",
        fontColor: "#FFFFFF",
        strokeWidth: 2,
      },
      circle: {
        fill: "#F35A4F",
        stroke: "#F35A4F",
        fontColor: "#FFFFFF",
        strokeWidth: 2,
      },
      rectangle: {
        fill: "#FFFFFF",
        stroke: "#F35A4F",
        fontColor: "#4C4C4C",
        strokeWidth: 2,
      },
    };

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
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram("diagram", {
        type: "default",
        defaults: this.defaults,
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        type: "default",
      });

      this.editor.events.on("ApplyButton", this.applyButton);
      this.editor.events.on("ResetButton", this.resetButton);

      this.diagram.data.parse(simlaneExport);
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

export default DefaultEditorSwimlane;
