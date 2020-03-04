import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Submission from './components/Submission.jsx';
import "./components/css.css"

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log(props.history.location);
     this.state = { message: "" };
  }


  callbackFunction = (childData) => {
      console.log(childData);
    this.setState({message: childData}, () => {console.log(this.state.message)});
  };
  render() {
  return (
      <div>
        <Submission parentCallback = {this.callbackFunction}/>
        <h6>get from choices</h6>
        <input
            type="text" value={this.state.message}/>
          <button onClick={() => this.props.history.goBack()}>back</button>
          <button onClick={() => this.props.history.push("/cat")}>scsdsd</button>
      </div>
  );}
}

export default App;
