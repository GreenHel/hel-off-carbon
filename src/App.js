import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GraphView from "./components/GraphView";

const App = () => (
  <Router>
    <div >
      <Navigation name="topnav" />
      <Home />
      <GraphView />
      <Container />
      <Footer />
    </div>
  </Router>
);

export default App