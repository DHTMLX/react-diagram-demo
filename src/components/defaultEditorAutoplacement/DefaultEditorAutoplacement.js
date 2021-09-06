import React, { Component } from "react";
import fromCDN from "from-cdn";

import { autoPlaceData } from "../../static/data";

class DefaultEditorAutoplacement extends Component {
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
        type: "default",
        autoplacement: {
          mode: "direct",
        },
      });

      this.editor.parse(autoPlaceData);
    });
  }

  render() {
    return (
      <div className="dhx-container_inner">
        <div className="dhx_sample-widget" id="editor"></div>
      </div>
    );
  }
}

export default DefaultEditorAutoplacement;
