import React from "react";

//import globalstyles
import GlobalStyles from "./components/GlobalStyles";

//import pages
import AboutUs from "./pages/AboutUs";

// import styles
// import "../src/styles/app.scss";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AboutUs />
    </div>
  );
}

export default App;
