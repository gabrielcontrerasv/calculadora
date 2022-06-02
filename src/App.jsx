import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="calc">
      <div className="fullscreen">
      <div className="screenvalues"> 45</div>
      <div className="screen"> 28 + 17</div>
      </div>
        <div className="group1">
          <button className="buttone" >AC</button>
          <button className="button1">/</button>
          <button className="button1">*</button>
        </div>

        <div className="group2">
          <button className="button2">7</button>
          <button className="button2">8</button>
          <button className="button2">9</button>
          <button className="button2">-</button>
        </div>

        <div className="group3">
          <button className="button3">4</button>
          <button className="button3">5</button>
          <button className="button3">6</button>
          <button className="button3">+</button>
        </div>


        <div className="group3">
          <button className="button3">1</button>
          <button className="button3">2</button>
          <button className="button3">3</button>
          <button className="button3">=</button>
        </div>


        <div className="group1">
          <button className="buttonzero">0</button>
          <button className="buttondot">.</button>
        </div>

      </div>
    </div>
  );
}

export default App;
