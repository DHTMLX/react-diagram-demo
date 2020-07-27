import React from "react";
import { storiesOf } from "@storybook/react";
import WideFlowChartCdn from "../components/wideFlowChart/WideFlowChartCdn";

storiesOf("Wide Flow Chart", module).add("Base", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/wideFlowChart/WideFlowChartCdn.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <WideFlowChartCdn></WideFlowChartCdn>
    </section>
  );
});
