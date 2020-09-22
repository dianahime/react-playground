import React, { useState } from 'react';
import './App.css';
import CharacterCount from './components/CharacterCount'
import RandomColor from './components/RandomColor';
import Counter from './components/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';


function App() {
  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
  const [color, setColor] = useState(randomColor)

  return (
    <Router>
      <div style={{ backgroundColor: color }}>

        <Navigation />

        <Switch>
          <Route path="/characterCount" component={CharacterCount}>
            <CharacterCount color={color} />
          </Route>
          <Route path="/counter" component={Counter}>
            <Counter color={color} />
          </Route>
          <Route path="/" >
            <RandomColor color={color} setColor={setColor} randomColor={randomColor} />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

