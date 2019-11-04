import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";

const App = () => (
  <Router>
    <div >
      <Container />
    </div>
  </Router>
);

export default App