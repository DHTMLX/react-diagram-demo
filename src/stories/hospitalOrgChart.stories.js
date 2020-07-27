import React from "react";
import { storiesOf } from "@storybook/react";
import HospitalOrgChartCdn from "../components/hospitalOrgChart/HospitalOrgChartCdn";

storiesOf("Hospital Org Chart", module).add("Base", () => {
  return (
    <section className="dhx-container">
      <div className="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          className="source-link"
          href="https://github.com/DHTMLX/react-diagram-demo/blob/master/src/components/hospitalOrgChart/HospitalOrgChartCdn.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
      <HospitalOrgChartCdn></HospitalOrgChartCdn>
    </section>
  );
});
