import React from "react";

//import globalstyles
import GlobalStyles from "./components/GlobalStyles";

//import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";

import MovieDetails from "./pages/MovieDetails";

import { AnimatePresence } from "framer-motion";

import { Route, Routes, useLocation } from "react-router";
// import { Route, Switch } from "react-router";
// import styles
// import "../src/styles/app.scss";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/work/:id" element={<MovieDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
