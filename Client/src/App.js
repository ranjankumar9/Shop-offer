
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Cart />
      {/* <Admin /> */}
      <AllRoutes />
      {/* <h1>Project name :- ShopOffer.com</h1>
      <img src={logo} width="800" alt="Projectlogo" /> */}
    </div>
  );
}

export default App;
