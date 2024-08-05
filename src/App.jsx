import { useState } from "react";
import "./App.css";
import ShapeTable from "./components/ShapeTable.jsx";

function App() {
  const [shapes, setShapes] = useState([]);
  return (
    <>
      <h1>Shape Visualisation</h1>
      <ShapeTable shapes={shapes} setShapes={setShapes} />
    </>
  );
}

export default App;
