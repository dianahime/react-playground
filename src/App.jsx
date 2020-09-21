import React, { useState } from 'react';
import './App.css';
import CharacterCount from './CharacterCount'
import RandomColor from './RandomColor';
import Counter from './Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


function App() {
  const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
  const [color, setColor] = useState(randomColor)

  return (
    <Router>
      <div style={{ backgroundColor: color }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Random Color</Link>
            </li>
            <li>
              <Link to="/characterCount">Character Count</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>


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

        {/*    <div className="App" style={{ backgroundColor: color }}>
          <RandomColor color={color} setColor={setColor} randomColor={randomColor} />
          <CharacterCount color={color} />
          <Counter color={color} />
        </div> */}
      </div>
    </Router>

  );
}

export default App;

