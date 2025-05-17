import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[state,setState] = useState(false);
  return (
    <div id="main">
      
      {state && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={()=>setState(true)}>click</button>
    </div>
  );
}


export default App;
