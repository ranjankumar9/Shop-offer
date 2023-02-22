import Admin from "./Admin/components/Admin/AdminLayout";
import "./App.css";
import logo from "./Images/projectlogo.png";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* <Admin /> */}
      <AllRoutes />
      {/* <h1>Project name :- ShopOffer.com</h1>
      <img src={logo} width="800" alt="Projectlogo" /> */}
    </div>
  );
}

export default App;
