import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import UploadForm from './components/UploadForm.js';
import Home from './components/Home';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <header className="App-header">
        <ul>
        <Link className="App-link" reloadDocument to="/">Home</Link> | <Link className="App-link" reloadDocument to="/upload">Upload</Link>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/upload" element={<UploadForm/>} />
        </Routes>
      </header>
    </BrowserRouter>
    </div>
  );
}

export default App;
