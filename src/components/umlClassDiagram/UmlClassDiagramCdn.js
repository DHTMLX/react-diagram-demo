import React, { Component } from "react";
import Button from "../button/Button";
import fromCDN from "from-cdn";
import "./UmlClassDiagramCdn.css";

const defaults = {
  title: "Title",
  text: ["Text"],
  height: 90,
  width: 140,
  fill: "#CEEFE1",
  stroke: "#0AB169",
  strokeWidth: 2,
};

class UmlClassDiagramCdn extends Component {
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
      this.diagram = new dhx.Diagram("diagram");

      this.diagram.data.load("./static/fullHtmlData.json");

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        controls: { autoLayout: false },
        shapeSections: {
          "custom shapes": ["template"],
          "flowchart shapes": [true],
        },
      });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: defaults,
      });
      this.editor.diagram.addShape("template", {
        template: this.template,
        defaults: defaults,
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
      <section class="dhx-diagram-demo_uml" style="background: ${config.fill}; border: ${config.strokeWidth}px solid ${config.stroke}">
        <h3 style="border-bottom: ${config.strokeWidth}px solid ${config.stroke}">${config.title}</h3>
        <ul><li>${config.text.join("</li><li>")}</li></ul>
      </section>
    `;
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

export default UmlClassDiagramCdn;
