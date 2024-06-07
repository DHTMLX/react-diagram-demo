import DiagramComponent from "./DiagramComponent";
import { getData } from "./data";
import { useState } from "react";

function App() {
  let [data] = useState(getData());
  return <DiagramComponent data={data} />;
}

export default App;