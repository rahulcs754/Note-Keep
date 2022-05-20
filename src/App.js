import Routespaths from "frontend/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Nav, Filter } from "./frontend/Component";
import { useAuthData } from "./frontend/Context";
function App() {
  const { userAuth } = useAuthData();
  const { isUserLoggedIn } = userAuth;
  return (
    <div className="App">
      <Nav />
      <Routespaths />
      {isUserLoggedIn ? <Filter /> : null}

      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </div>
  );
}

export default App;
