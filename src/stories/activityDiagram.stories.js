import React from "react";
import { storiesOf } from "@storybook/react";
import ActivityDiagramCdn from "../components/activityDiagram/ActivityDiagramCdn";

storiesOf("Activity Diagram", module).add("Base", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/activityDiagram/ActivityDiagramCdn.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <ActivityDiagramCdn></ActivityDiagramCdn>
    </section>
  );
});
