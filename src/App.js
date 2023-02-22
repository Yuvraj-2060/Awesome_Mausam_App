import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {/* <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Yuvraj Singh
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="https://www.htmlhints.com/">
          HTML HINTS
        </a> */}
        <a href="https://github.com/Yuvraj-2060/Awesome_Mausam_App">
          Download Source Code
        </a>{" "}

        | Developed by{" "}
        <a target="_blank" href="https://github.com/Yuvraj-2060/Awesome_Mausam_App">
          Yuvraj Singh (Handsome-Coding)
        </a>{" "}

      </div>
    </React.Fragment>
  );
}

export default App;
