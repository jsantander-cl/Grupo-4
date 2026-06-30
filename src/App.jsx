import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import About from "./pages/About";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;