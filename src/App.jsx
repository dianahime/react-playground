import React, { useState } from 'react';
import './App.scss';
import CharacterCount from './components/CharacterCount'
import RandomColor from './components/RandomColor';
import Counter from './components/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import ColorPicker from './components/ColorPicker';


function App() {
  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
  const [color, setColor] = useState(randomColor)

  return (
    <Router>
      <div className="App" style={{ backgroundColor: color }}>

        <Navigation />

        <Switch>
          <Route path="/characterCount" >
            <CharacterCount color={color} />
          </Route>
          <Route path="/counter">
            <Counter color={color} />
          </Route>
          <Route path="/colorPicker">
            <ColorPicker color={color} setColor={setColor} />
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

