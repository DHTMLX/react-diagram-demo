import DiagramEditor from "./DiagramEditor";
import { getData } from "./data";

function App() {
  let data = getData();
  return <DiagramEditor data={data} />;
}

export default App;
