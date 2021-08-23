import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
