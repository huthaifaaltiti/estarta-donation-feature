// imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
const Home = React.lazy(() => import("./pages/Home"));
const Giving = React.lazy(() => import("./pages/Giving"));

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </React.Suspense>
              }
            />
            <Route
              path="/giving"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Giving />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
