//imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./static/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import Nav from "./pages/components/Nav";

//pages
import Index from "./pages/Index";

const App = () => {
  return (
    <>
      <main>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
