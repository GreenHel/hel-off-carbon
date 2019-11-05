import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";
import Home from "./components/Home";

const App = () => (
  <Router>
    <div >
      <Home />
      <Container />
    </div>
  </Router>
);

export default App