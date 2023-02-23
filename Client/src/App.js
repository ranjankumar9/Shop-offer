import "./App.css";
import HomePage from "./components/HomePage";
import NavbarMain from "./components/NavbarMain";
import Sidebar from "./components/Sidebar";
import BeautyHover from "./components/sideBarhover/beautyHover";
import Homekichenhover from "./components/sideBarhover/homekichenhover";
import MenHover from "./components/sideBarhover/MenHover";
import ToyKidsHover from "./components/sideBarhover/ToykidsHover";
import WomenHover from "./components/sideBarhover/WomenHover";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
