import Navbar from "./common/Navbar";
import Home from "./features/Home/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="App" className="px-[8vw] bg-primary min-h-screen w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
