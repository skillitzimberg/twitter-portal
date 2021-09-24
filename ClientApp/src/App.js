import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Search from "./pages/Search";

import "./custom.css";

const App = () => {
    const rootURL = window.location.origin
  return (
    <Layout>
      <Route exact path="/" component={Home} />
          <Route path="/search">
              <Search apiUrl={`${rootURL}/api`} />
          </Route>
          <Route path="/random">
              <Random apiUrl={`${rootURL}/api`} />
          </Route>
    </Layout>
  );
};

export default App;
