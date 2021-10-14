import { useState } from "react";
import Card from "./components/Card";
import List from "./containers/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
