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
import Playing from './pages/playing'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/playing" component={Playing} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
