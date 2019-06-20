import React from "react";
import "./App.scss";
import Popular from "./Popular";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Battle from "./Battle";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
          <Route exact path="/battle" component={Battle} />
          <Route render = {() => <p>Not found</p>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
