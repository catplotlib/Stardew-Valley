import Home from "./Home";
import About from "./About";
import Characters from "./Characters";
import Gameplay from "./Gameplay";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>

          <Route path="/Characters">
            <Characters />
          </Route>

          <Route path="/Gameplay">
            <Gameplay />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
