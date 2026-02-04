import { useState } from "react";
import CompIn from "./CopmIn";
import CompRes from "./CompRes";
import "./App.css";

export type Operation = "+" | "-" | "*" | "/";

function App() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [operation, setOperation] = useState<Operation>("+");

  return (
    <div className="app">
      <h1>Калкулатор</h1>

      <CompIn
        num1={num1}
        num2={num2}
        operation={operation}
        onNum1Change={setNum1}
        onNum2Change={setNum2}
        onOperationChange={setOperation}
      />

      <CompRes
        num1={num1}
        num2={num2}
        operation={operation}
      />
    </div>
  );
}


export default App;
