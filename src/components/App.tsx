import Navbar from "./common/NavBar/Navbar";
import Home from "./features/Home/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="App" className="bg-primary font-raleway text-secondary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
