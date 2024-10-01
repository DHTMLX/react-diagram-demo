import { useEffect, useRef } from "react";
import { DiagramEditor } from "@dhx/trial-diagram";
import "@dhx/trial-diagram/codebase/diagram.min.css";

export default function DiagramEditorComponent(props) {
  let container = useRef();

  useEffect(() => {
    const diagram_editor = new DiagramEditor(container.current, {});
    diagram_editor.parse(props.data);

    return () => {
      diagram_editor.destructor();
    }
  });

  return <div ref={container} className="widget"></div>;
}
