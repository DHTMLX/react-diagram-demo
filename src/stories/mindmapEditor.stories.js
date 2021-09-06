import React from "react";
import { storiesOf } from "@storybook/react";
import MindmapEditor from "../components/mindmapEditor/MindmapEditor";

storiesOf("Mindmap Editor", module).add("Emotions", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Diagram with Editor in mindmap mode</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/mindmapEditor/MindmapEditor.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <MindmapEditor></MindmapEditor>
    </section>
  );
});
