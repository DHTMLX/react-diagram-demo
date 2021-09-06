import React from "react";
import { storiesOf } from "@storybook/react";
import OrgChartEditor from "../components/orgChartEditor/OrgChartEditor";
import OrgChartEditorCustomShape from "../components/orgChartEditorCustomShape/OrgChartEditorCustomShape";

storiesOf("Org Chart Editor", module)
.add("Img Card", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Diagram with Editor in org chart mode</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/orgChartEditor/OrgChartEditor.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <OrgChartEditor></OrgChartEditor>
    </section>
  );
})
.add("Custom Shape", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Diagram with Editor in org chart mode. Custom shapes</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/orgChartEditorCustomShape/OrgChartEditorCustomShape.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <OrgChartEditorCustomShape></OrgChartEditorCustomShape>
    </section>
  );
});
