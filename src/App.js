import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Submission from './components/Submission.jsx';
import "./components/css.css"
import { Input, Button, Header } from 'semantic-ui-react'

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
        <Header size='huge'>get from choices</Header>
        <Input
            type="text" value={this.state.message}
            onChange={() => {}}/>
          <Button onClick={() => this.props.history.goBack()}>back</Button>
          <Button onClick={() => this.props.history.go(-2)}>Go</Button>
      </div>
  );}
}

export default App;
