import React, { Component } from "react";
import fromCDN from "from-cdn";
import Button from "../button/Button";
import "./DefaultEditorGroup.css";

import { groupData } from "../../static/data";

class DefaultEditorGroup extends Component {
  constructor(props) {
    super(props);

    this.runEditor = this.runEditor.bind(this);
    this.applyButton = this.applyButton.bind(this);
    this.resetButton = this.resetButton.bind(this);

    this.defaults = {
      width: 115,
      height: 120,
      text: "description",
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
      const path = "./common/img/it/";
      const extension = ".png";

      const it_01 = { type: "it", img: path + "it_01" + extension, ...this.defaults };
      const it_02 = { type: "it", img: path + "it_02" + extension, ...this.defaults };
      const it_03 = { type: "it", img: path + "it_03" + extension, ...this.defaults };
      const it_04 = { type: "it", img: path + "it_04" + extension, ...this.defaults };
      const it_05 = { type: "it", img: path + "it_05" + extension, ...this.defaults };
      const it_06 = { type: "it", img: path + "it_06" + extension, ...this.defaults };
      const it_07 = { type: "it", img: path + "it_07" + extension, ...this.defaults };
      const it_08 = { type: "it", img: path + "it_08" + extension, ...this.defaults };
      const it_09 = { type: "it", img: path + "it_09" + extension, ...this.defaults };
      const it_10 = { type: "it", img: path + "it_10" + extension, ...this.defaults };
      const it_11 = { type: "it", img: path + "it_11" + extension, ...this.defaults };
      const it_12 = { type: "it", img: path + "it_12" + extension, ...this.defaults };
      const it_13 = { type: "it", img: path + "it_13" + extension, ...this.defaults };
      const it_14 = { type: "it", img: path + "it_14" + extension, ...this.defaults };

      const generalGroup = {
        type: "$group",
        width: 390,
        height: 350,
        header: {
          text: "General group",
          closable: true,
          fontColor: "#FFF",
          iconColor: "#FFF",
          fill: "#333",
        },
      };
      const regularGroup = {
        type: "$group",
        width: 390,
        height: 350,
        header: {
          text: "Regular group",
          closable: true,
        },
      };

      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram("diagram", {
        type: "default",
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        type: "default",
        shapeBarWidth: 330,
        scalePreview: 0.7,
        shapeSections: {
          "Architecture items": [
            it_01, it_02, it_03,
            it_04, it_05, it_06,
            it_07, it_08, it_09,
            it_10, it_11, it_12,
            it_13, it_14,
          ],
          "Groups": [
            generalGroup,
            regularGroup
          ],
        },
      });

      this.diagram.addShape("it", {
        template: this.template,
        defaults: this.defaults,
      });

      this.editor.diagram.addShape("it", {
        template: this.template,
        defaults: this.defaults,
        properties: [
          { type: "arrange" },
          { type: "text" },
        ]
      });

      this.editor.events.on("ApplyButton", this.applyButton);
      this.editor.events.on("ResetButton", this.resetButton);

      this.diagram.data.parse(groupData);
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

  template({ img, text }) {
    return `
      <div class="dhx-diagram-demo_group">
        <div class="dhx-diagram-demo_group__image" style="background-image:url(${img});"></div>
        <div class="dhx-diagram-demo_group__text">${text}</div>
      </div>
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

export default DefaultEditorGroup;
