import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UploadForm from './components/UploadForm.js';

function App() {
  const [data, setData] = useState({state: "", message: ""});

  useEffect(() =>{fetch("/index")
  .then(res => res.json()
  .then(response =>{
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
              <Routes>
                <Route exact path="/">
                  <React.Fragment>
                    <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      git gud @ react, scrub
                    </a>
                  </React.Fragment>
                </Route>

                <Route exact path="/upload">
                  <React.Fragment>
                    <UploadForm/>
                  </React.Fragment>
                </Route>
              
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
