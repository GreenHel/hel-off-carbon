import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./components/Container";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";

const App = () => (
  <Router>
    <div >
      <Navigation name="topnav" />
      <Container />
      <SocialMedia />
      <Footer />
    </div>
  </Router>
);

export default App