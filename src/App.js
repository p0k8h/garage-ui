import logo from './logo.svg';
import './App.css';
import NavBar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';
import Routes from "./Routes";

const checkAuth = () => {
  const token = localStorage.getItem("jwtToken");
  if (!token) {
    return false;
  }
  return true;
};

function App() {
  return (
    <div className="App">
      <div style={{
        margin: "auto",
      }}>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        {<NavBar />}
        <Routes />
      </div>
    </div>
  );
}

export default App;
