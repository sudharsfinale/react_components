import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marquee from "./components/Marquee";
import SomeRandom from "./components/SomeRandom";
import Carousel from "./components/Carousel";
import Menu from "./components/Menu";
import Layout from "./container/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/marquee"
          element={
            <div className="container mx-auto w-full h-screen text-white flex justify-center items-center overflow-x-hidden">
              <Marquee />
            </div>
          }
        />
        <Route path="/framer_motion" element={<SomeRandom />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
