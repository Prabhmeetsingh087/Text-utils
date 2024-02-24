import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import Alert from "./components/Alert";

import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  //alert is an object
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("Dark mode has been accepted", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been accepted", "success");
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="Textutils"
        aboutText="about textutils"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />}></Route>

          <Route
            exact path="/"
            element={
              <TextForm heading="Enter text to analyze" />
            }
          ></Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
