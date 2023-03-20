import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Switch, Route, Link } from 'react-router-dom';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.message}
        </p>
          <BrowserRouter>
            <ul>
            <Link className="App-link" to="/">Home</Link> | <Link className="App-link" to="/upload">Upload</Link>
            </ul>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              git gud @ react, scrub
            </a>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
