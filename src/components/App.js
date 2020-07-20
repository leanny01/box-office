import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './parts/nav'

import Home from './pages/home'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
          {/* <Route path="/movie/:id?" component={movie}>
            <Movie />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
