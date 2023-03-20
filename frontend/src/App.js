import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState({state: "", message: ""});

  useEffect(() =>{fetch("/index")
  .then(res => res.json()
  .then(data =>{
    console.log("here's data: ");
    console.log(data);
    setData({state: data.state, message: data.message});
  })
  );
  })


  return (
    <div className="App">
      <header className="App-header">
        {/* Calling a data from setdata for showing */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
