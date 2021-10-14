import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import ScoutsSection from './components/pages/Scouts/Scouts';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sailorscouts' exact component={ScoutsSection} />
      </Switch>
    </Router>
  );
}

export default App;
