import { useState } from "react";
import "./App.css";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import calculate from "./logic/calculate";

function App() {

  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (name) => {
    setValue(calculate(value, name));
  }

  return (
    <div className="container">
      <Display value={value.next || value.total || 0} data={value} />
      <ButtonPanel clickHandler={handleClick} />
    </div>

  );
}

export default App;
