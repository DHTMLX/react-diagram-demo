import React, { Component } from "react";
import fromCDN from "from-cdn";
import Button from "../button/Button";
import "./OrgChartEditorCustomShape.css";

import { medicalWorkers } from "../../static/data";

class OrgChartEditorCustomShape extends Component {
  constructor(props) {
    super(props);

    this.runEditor = this.runEditor.bind(this);
    this.applyButton = this.applyButton.bind(this);
    this.resetButton = this.resetButton.bind(this);

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
        type: "org",
        defaultShapeType: "template",
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        type: "org",
        shapeType: "template",
      });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: {
          height: 115,
          width: 330,
        },
      });

      this.editor.diagram.addShape("template", {
        template: this.template,
        defaults: {
          name: "Name and First name",
          post: "Position held",
          phone: "(405) 000-00-00",
          mail: "some@mail.com",
          photo: "../common/big_img/big-avatar-1.jpg",

          height: 115,
          width: 330,
        },
        properties: [
          { type: "position" },
          { type: "size" },
          { type: "text", label: "Name", property: "name" },
          { type: "text", label: "Post", property: "post" },
          { type: "text", label: "Phone", property: "phone" },
          { type: "text", label: "Mail", property: "mail" },
          { type: "img", label: "Photo", property: "photo" },
        ],
      });

      this.editor.events.on("ApplyButton", this.applyButton);
      this.editor.events.on("ResetButton", this.resetButton);

      this.diagram.data.parse(medicalWorkers);
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

  template({ photo, name, post, phone, mail }) {
    return `
      <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
        <div class="dhx_diagram_template_a__inside">
          <div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>
          <div class="dhx_diagram_template_a__body">
            <div class="dhx_diagram_template_a__title">${name}</div>
            <div class="dhx_diagram_template_a__row">
              <span class="dhx_diagram_template_a__text">${post}</span>
            </div>
            <div class="dhx_diagram_template_a__row">
              <span class="dhx_diagram_template_a__icon mdi mdi-cellphone-android"></span>
              <span class="dhx_diagram_template_a__text">${phone}</span>
            </div>
            <div class="dhx_diagram_template_a__row">
              <span class="dhx_diagram_template_a__icon mdi mdi-email-outline"></span>
              <span class="dhx_diagram_template_a__text">
                <a class="dhx_diagram_template_a__link" href="mailto:${mail}" target="_blank">${mail}</a>
              </span>
            </div>
          </div>
        </div>
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

export default OrgChartEditorCustomShape;
