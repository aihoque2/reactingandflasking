import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UploadForm from './components/UploadForm.js';
import Home from './components/Home';

function App() {
  const [data, setData] = useState({state: "", message: ""});

  /*
  useEffect(() =>{fetch("/index")
  .then(res => res.json()
  .then(response =>{
    console.log("here's data: ");
    console.log(data);
    setData({state: data.state, message: data.message});
  })
  );
  })
*/

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
                <Route exact path="/" element={<Home/>}>
                </Route>

                <Route exact path="/upload" element={<UploadForm/>}>

                </Route>
              
              </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
