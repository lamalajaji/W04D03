import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Card from "./components/Card";
import Contact from "./components/Contact";
import Nav from "./components/Nav";



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/Nav" component={Nav} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Cards" component={Cards} />
        <Route exact path="/Card/:id" component={Card} />
      </Switch>
    </div>
  );
}

export default App;


 