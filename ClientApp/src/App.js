import React from "react";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Search from "./pages/Search";

import "./custom.css";

const App = () => {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/random" component={Random} />
    </Layout>
  );
};

export default App;
