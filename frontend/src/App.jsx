import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";

import Index from "./pages/Index";
import Nav from "./pages/components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

//admin module import
import AddCredentials from "./adminPages/AdminAddcredentials";

function App() {
  const user = localStorage.getItem("user");

  return (
    <>
      <main>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to={"/"} />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="*"
              element={
                <h2 className="text-center pt-5">This page is unavailable</h2>
              }
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />

            {/* Admin routes */}
            <Route path="/admin/addcredential" element={<AddCredentials />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
