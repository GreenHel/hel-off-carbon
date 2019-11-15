import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => (
  <Router>
    <div >
      <Navigation name="topnav" />
      <Home />
      <Container />
      <div id>
      </div>
    </div>
  </Router>
);

export default App