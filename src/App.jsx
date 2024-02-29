// importsgi
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import Home from "./pages/Home";
import Giving from "./pages/Giving";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="p-2">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/giving" element={<Giving />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
