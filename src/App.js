import React from "react";
import "./App.css";
import Header from "./app/components/Header";
import Home from "./app/components/Home";
import GlobalStyle from "./app/styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
