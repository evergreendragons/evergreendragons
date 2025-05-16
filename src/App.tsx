import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import PeopleGrid from "./Profile";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        {/* <Navbar />
        <LandingPage /> */}
      </div>
      <PeopleGrid />
    </>
  );
}

export default App;
