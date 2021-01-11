import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutPage from "./Checkout/CheckoutPage/CheckoutPage";
import SearchPage from "./Search/SearchPage/SearchPage";
import Navigation from "./Navigation/Navigation";
import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./Theme/ThemeLight";
import { GlobalStyle } from "./AppStyles";

const AppWithContexts = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const App: React.FC = () => (
  <ThemeProvider theme={ThemeLight}>
    <AppWithContexts />
  </ThemeProvider>
);

export default App;
