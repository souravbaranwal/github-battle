import React from "react";
import "./App.scss";
import Popular from "./Popular";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route path='/popular' component={Popular}/>
      </div>
    </Router>
  );
}

export default App;
