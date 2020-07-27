import React, { Component } from "react";
import Button from "../button/Button";
import fromCDN from "from-cdn";
import "./LifeCycleDiagramWithStickyNotesCdn.css";

const defaultYellow = {
  width: 160,
  height: 160,
  text: "Sticky yellow",
  background: "../common/img/other_image/yellow.svg",
};

const defaultBlue = {
  width: 160,
  height: 160,
  text: "Sticky blue",
  background: "../common/img/other_image/blue.svg",
};

class LifeCycleDiagramWithStickyNotesCdn extends Component {
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

      this.diagram.data.load("./static/stickyNote.json");

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        controls: { autoLayout: false },
        shapeSections: {
          "sticky notes": ["blue", "yellow"],
          "flowchart shapes": [true],
        },
      });

      this.diagram.addShape("yellow", {
        template: this.template,
        defaults: defaultYellow,
      });
      this.diagram.addShape("blue", {
        template: this.template,
        defaults: defaultBlue,
      });
      this.editor.diagram.addShape("yellow", {
        template: this.template,
        defaults: defaultYellow,
      });
      this.editor.diagram.addShape("blue", {
        template: this.template,
        defaults: defaultBlue,
      });

      this.editor.events.on("ApplyButton", this.applyButton);
      this.editor.events.on("ResetButton", this.resetButton);
    });
  }

  componentWillUnmount() {
    this.diagram && this.diagram.destructor();
  }

  template(config) {
    return `
      <section class="dhx-diagram-demo_life-cycle" style="background-image: url('${config.background}')">
        <span>${config.text}</span>
      </section>
    `;
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
          <div className="dhx_sample-container__widget" id="diagram"></div>
        </div>
        <div className="dhx_sample-container__with-editor" style={isCollapsed ? { display: "none" } : {}}>
          <div className="dhx_sample-widget" id="editor"></div>
        </div>
      </div>
    );
  }
}

export default LifeCycleDiagramWithStickyNotesCdn;
