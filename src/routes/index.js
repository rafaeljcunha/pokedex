import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import InitialPage from "../pages/Home";
import PokeInformation from "../pages/Info";
import GlobalStyle from "../utils/GlobalStyles";

export default function Routes() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <InitialPage />
          </Route>
          <Route path="/poke_info/:name" exact>
            <PokeInformation />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Fragment>
  );
}
