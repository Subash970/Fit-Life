import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./static/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

//pages
import Index from "./pages/Index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
