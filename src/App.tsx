import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Marquee from "./components/Marquee";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto w-full h-screen text-white flex justify-center items-center overflow-x-hidden">
      <Marquee />
    </div>
  );
}

export default App;
