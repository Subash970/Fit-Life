import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";

import Index from "./pages/Index";
import Nav from "./pages/components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <main>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="*"
              element={
                <h2 className="text-center pt-5">This page is unavailable</h2>
              }
            />
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
