import React from 'react';
import Main from './views/Main';
import Edit from './views/Edit';
import Add from './views/Add';
import {Router} from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path = "/"/>
        <Edit path = "/author/:id/edit"/>
        <Add path = "/add"/>
      </Router> 
    </div>
  );
}

export default App;
