import React, { Component } from "react";
import Button from "../button/Button";
import fromCDN from "from-cdn";
import "./HospitalOrgChartCdn.css";
import "@mdi/font/css/materialdesignicons.min.css";

class HospitalOrgChartCdn extends Component {
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
        type: "org",
        defaultShapeType: "template",
      });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: {
          height: 115,
          width: 330,
        },
      });

      this.diagram.data.load("./static/medCardShape.json");

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        type: "org",
        shapeType: "template",
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
          { type: "text", label: "name", property: "name" },
          { type: "text", label: "post", property: "post" },
          { type: "text", label: "phone", property: "phone" },
          { type: "text", label: "email", property: "mail" },
          { type: "img", label: "photo", property: "photo" },
        ],
      });

      this.editor.events.on("ApplyButton", this.applyButton);
      this.editor.events.on("ResetButton", this.resetButton);
    });
  }

  componentWillUnmount() {
    this.diagram && this.diagram.destructor();
  }

  template({ photo, name, post, phone, mail }) {
    return `
      <div class="dhx-diagram-demo_personal-card">
        <div class="dhx-diagram-demo_personal-card__container dhx-diagram-demo_personal-card__img-container">
          <img src="${photo}" alt="${name}-${post}"></img>
        </div>
        <div class="dhx-diagram-demo_personal-card__container">
          <h3>${name}</h3>
          <p>${post}</p>
          <span class="dhx-diagram-demo_personal-card__info">
            <i class="mdi mdi-cellphone-android"></i>
            <p>${phone}</p>
          </span>
          <span class="dhx-diagram-demo_personal-card__info">
            <i class="mdi mdi-email-outline"></i>
            <a href="mailto:${mail}" target="_blank">${mail}</a>
          </span>
        </div>
      </div>
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

export default HospitalOrgChartCdn;
