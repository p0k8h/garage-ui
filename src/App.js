import './App.css';
import NavBar from "./navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <div style={{
        margin: "auto",
        width: "95%"
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
