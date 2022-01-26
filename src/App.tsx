// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import Home from "./pages/home";
import SiteHeader from "./components/ui/site-header";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <SiteHeader></SiteHeader>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route  path="/privacy-policy" element={<PrivacyPolicy/>}/> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
