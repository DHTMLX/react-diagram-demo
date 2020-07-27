import React from "react";
import { storiesOf } from "@storybook/react";
import LifeCycleDiagramWithStickyNotesCdn from "../components/lifeCycleDiagramWithStickyNotes/LifeCycleDiagramWithStickyNotesCdn";

storiesOf("Life Cycle Diagram With Sticky Notes", module).add("Base", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/lifeCycleDiagramWithStickyNotes/LifeCycleDiagramWithStickyNotesCdn.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <LifeCycleDiagramWithStickyNotesCdn></LifeCycleDiagramWithStickyNotesCdn>
    </section>
  );
});
