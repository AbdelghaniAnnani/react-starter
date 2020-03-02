import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Submission from './components/Submission.jsx';
import "./components/css.css"

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="row">
        <Sidebar/>
        </div>
        <div className="row form-side">
        <Submission/>
        </div>
      </div>
    </div>
  );
}

export default App;
