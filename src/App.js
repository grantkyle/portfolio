import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
          <div className='App'>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/projects' component={Projects} />
          <Route exact path='/blog' component={Blog} /> */}
          </div>
        </Router>
    
  );
}

export default App;
