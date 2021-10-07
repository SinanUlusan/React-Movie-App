import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './components/pages/Category';
import News from './components/pages/News';
import MovieHouse from './components/pages/MovieHouse';
import Action from './components/pages/Categories/Action';
import Comedy from './components/pages/Categories/Comedy';
import ScienceFiction from './components/pages/Categories/ScienceFiction';
import RomanceDrama from './components/pages/Categories/RomanceDrama';
import ComingSoon from './components/pages/ComingSoon';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/category' component={Category} />
        <Route path='/news' component={News} />
        <Route path='/movie-house' component={MovieHouse} />
        <Route path='/action' component={Action} />
        <Route path='/comedy' component={Comedy} />
        <Route path='/scienceandfiction' component={ScienceFiction} />
        <Route path='/family-drama' component={RomanceDrama} />
        <Route path='/coming-soon' component={ComingSoon} />
      </Switch>
    </Router>
  );
}

export default App;
