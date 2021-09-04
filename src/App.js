import './App.css';
import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
          <>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route path='/contact' component={Contact}/>
            </Switch>
          </>
  );
}

export default App;
