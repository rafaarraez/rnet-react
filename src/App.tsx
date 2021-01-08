import React from "react";
import Header from "./Components/header/Header";
import "semantic-ui-css/semantic.min.css";
import GlobalStyles from "./Components/globalStyles/globalStyles";
import Footer from "./Components/footer/Footer";
import MobileNavbar from "./Components/mobile-navbar/mobileNavbar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import Article from "./views/Article";
import Agreements from "./views/Agreements";
import Category from "./views/Category";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/rnet-react">
            <Redirect to="/home" />
        </Route>
        <Route exact path="/">
            <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/category/:category" component={Category} />
        <Route exact path="/legal" component={Agreements} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={Contact} />
      </Switch>
      <Footer />
      <MobileNavbar />
    </Router>
  );
}

export default App;
