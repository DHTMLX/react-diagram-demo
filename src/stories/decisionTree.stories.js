import React from "react";
import { storiesOf } from "@storybook/react";
import DecisionTreeCdn from "../components/decisionTree/DecisionTreeCdn";

storiesOf("Decision Tree", module).add("Base", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/decisionTree/DecisionTreeCdn.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <DecisionTreeCdn></DecisionTreeCdn>
    </section>
  );
});
