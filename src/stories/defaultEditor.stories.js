import React from "react";
import { storiesOf } from "@storybook/react";
import DefaultEditorSwimlane from "../components/defaultEditorSwimlane/DefaultEditorSwimlane";
import DefaultEditorAutoplacement from "../components/defaultEditorAutoplacement/DefaultEditorAutoplacement";
import DefaultEditorGroup from "../components/defaultEditorGroup/DefaultEditorGroup";
import DefaultEditorCustomShape from "../components/defaultEditorCustomShape/DefaultEditorCustomShape";

storiesOf("Default Editor", module)
.add("Autoplacement", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Diagram with Editor in default mode. Auto layout button</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/defaultEditorAutoplacement/DefaultEditorAutoplacement.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <DefaultEditorAutoplacement></DefaultEditorAutoplacement>
    </section>
  );
})
.add("Custom Shape", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Diagram with Editor in default mode. Custom shapes</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/defaultEditorCustomShape/DefaultEditorCustomShape.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <DefaultEditorCustomShape></DefaultEditorCustomShape>
    </section>
  );
})
.add("Group", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Diagram with Editor in default mode. Groups to organize shapes</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/defaultEditorGroup/DefaultEditorGroup.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <DefaultEditorGroup></DefaultEditorGroup>
    </section>
  );
})
.add("Swimlane", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Diagram with Editor in default mode. Swimlane and export to pdf/png</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/defaultEditorSwimlane/DefaultEditorSwimlane.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <DefaultEditorSwimlane></DefaultEditorSwimlane>
    </section>
  );
});
