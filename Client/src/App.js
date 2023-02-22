import "./App.css";
import NavbarMain from "./components/NavbarMain";
import logo from "./Images/projectlogo.png";

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <h1>Project name :- ShopOffer.com</h1>
      <img src={logo} width="800" alt="Projectlogo" />
    </div>
  );
}

export default App;
