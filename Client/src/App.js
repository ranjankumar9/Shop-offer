
import './App.css';
import Cart from './Components/Cart';
import Admin from "./Admin/components/Admin/AdminLayout";
import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Checkout from './Components/Checkout';


function App() {
  return (
    <div className="App">
      {/* <Cart /> */}
      <Checkout />
      {/* <Admin /> */}
      {/* <AllRoutes /> */}
      {/* <h1>Project name :- ShopOffer.com</h1>
      <img src={logo} width="800" alt="Projectlogo" /> */}
    </div>
  );
}

export default App;
