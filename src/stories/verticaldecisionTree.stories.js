import React from "react";
import { storiesOf } from "@storybook/react";
import VerticaldecisionTreeCdn from "../components/verticaldecisionTree/VerticaldecisionTreeCdn";

storiesOf("Vertical decision Tree", module).add("Base", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/verticaldecisionTree/VerticaldecisionTreeCdn.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <VerticaldecisionTreeCdn></VerticaldecisionTreeCdn>
    </section>
  );
});
