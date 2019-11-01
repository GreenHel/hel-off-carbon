import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";
import Navigation from "./components/Navigation";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Container />
    </div>
  </Router>
);

export default App