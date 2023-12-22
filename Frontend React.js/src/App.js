import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Content from "./components/Content";

let App = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div>
        <Content />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
};

export default App;
