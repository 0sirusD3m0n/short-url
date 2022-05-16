import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Form from "./components/Form";

function App() {
  return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path='/' element={<Form/>} />
              <Route path="/app" element={<Form/>} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
