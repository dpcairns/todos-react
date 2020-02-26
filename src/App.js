import React from 'react';
import logo from './logo.svg';
import TodoApp from './TodoApp.js';
import './App.css';
import { 
    BrowserRouter, 
    Route, 
    Switch,
 } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <header>
            my header
        </header>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ TodoApp }/>
            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
