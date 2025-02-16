import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";

import Index from "./pages/Index";
import Nav from "./pages/components/Nav";

function App() {
  return (
    <>
      <main>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={""} />
            <Route
              path="*"
              element={
                <h1 className="text-center">This page is unavailable</h1>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
