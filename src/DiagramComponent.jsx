import { useEffect, useRef, useState } from "react";
import "@dhx/trial-diagram/codebase/diagram.min.css";
import { DiagramEditor } from "@dhx/trial-diagram";

const DiagramComponent = ({ data }) => {
  let [diagram, setDiagram] = useState(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    const diagram = new DiagramEditor(nodeRef.current, { type: "default" });
    setDiagram(diagram);
    return () => diagram.destructor();
  }, []);

  useEffect(() => {
    if (!diagram) return;
    diagram.parse(data);
  }, [diagram, data]);

  return <div ref={nodeRef} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default DiagramComponent;
