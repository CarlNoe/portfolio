import Navbar from "./common/Navbar";
import Home from "./features/Home/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="App" className="min-h-screen w-screen bg-primary px-[8vw] text-secondary font-raleway">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
