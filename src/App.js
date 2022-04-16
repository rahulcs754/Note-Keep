import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routespaths from "./frontend/Router";

function App() {
  return (
    <div className="App">
      <Routespaths />
      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
