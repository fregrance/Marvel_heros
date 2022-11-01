import React from "react";
import "./App.css";
import Home from "./components/Home";
import { QA } from "./components/QA";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/QA" component={QA}>
              <QA />
            </Route>
          </>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
