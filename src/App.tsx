import React from "react";
import Header from "./Components/header/Header";
import "semantic-ui-css/semantic.min.css";
import GlobalStyles from "./Components/globalStyles/globalStyles";
import Footer from "./Components/footer/Footer";
import MobileNavbar from "./Components/mobile-navbar/mobileNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Article from "./views/Article";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/article/:id" component={Article} />
      </Switch>
      <Footer />
      <MobileNavbar />
    </Router>
  );
}

export default App;
