
import HomePage from "./Components/HomePage";
import Cart from "./Components/Cart";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <div className="App">

      <HomePage />
      <Cart />
      {/* <Admin /> */}

      <AllRoutes />
      {/* <Checkout /> */}
      <HomePage />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
