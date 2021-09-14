import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Services from "./Services.js"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
