import React, { Component } from "react";
import fromCDN from "from-cdn";

import { workers } from "../../static/data";

class OrgChartEditor extends Component {
  constructor(props) {
    super(props);
    this.ready = fromCDN([
      "https://webix.io/dev/dhtmlx/diagram/diagram_4.0/codebase/diagramWithEditor.css",
      "https://webix.io/dev/dhtmlx/diagram/diagram_4.0/codebase/diagramWithEditor.js",
    ]);
  }

  componentDidMount() {
    this.ready.then(() => {
      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor("editor", {
        type: "org",
        shapeType: "img-card",
      });
  
      this.editor.parse(workers);
    });
  }

  render() {
    return (
      <div className="dhx_sample-container">
        <div className="dhx_sample-widget" id="editor"></div>
      </div>
    );
  }
}

export default OrgChartEditor;
