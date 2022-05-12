import Routespaths from "frontend/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Nav, Filter } from "./frontend/Component";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routespaths />
      <Filter />
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
