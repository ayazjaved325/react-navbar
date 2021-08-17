import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import ContactUs from './pages/contactus';
import SignUp from './pages/signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route path="/home"  component={Home} />
    <Route path="/about"  component={About} />
    <Route path="/services"  component={Services} />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/signup"  component={SignUp} />
    </Switch>
    </Router>
  );
}

export default App;
