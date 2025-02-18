import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/style.css";

import Index from "./pages/Index";
import Nav from "./pages/components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/apiRequests/Logout";
import About from "./pages/About";

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
              path="/logout"
              element={user ? <Logout /> : <Navigate to={"/login"} />}
            />
            <Route
              path="*"
              element={
                <h2 className="text-center pt-5">This page is unavailable</h2>
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
