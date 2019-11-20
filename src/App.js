import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GraphView from "./components/GraphView";
import Pages from "./components/Pages"

const App = () => (
  <Router>
    <div >
      <Navigation name="topnav" />
      <Home />
      <GraphView />
      <Pages name='what'/>
      <Pages name='why'/>
      <Pages name='how'/>
      <Footer />
    </div>
  </Router>
);

export default App