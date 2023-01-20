import Home from "./features/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
