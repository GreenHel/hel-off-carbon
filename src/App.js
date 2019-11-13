import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";
import Home from "./components/Home";
import Footer from "./components/Footer"

const App = () => (
  <Router>
    <div>
      <Home />
      <Container />
      <div id>
      <Footer />
      </div>
    </div>
  </Router>
);

export default App