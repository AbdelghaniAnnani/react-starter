import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Submission from './components/Submission.jsx';
import "./components/css.css"
import { Input, Button, Header } from 'semantic-ui-react'
import { connect } from "react-redux";

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
  return (
      <div>
        <Submission/>
        <Header size='huge'>get from choices</Header>
        <Input
            type="text" value={this.props.option || ''}
            onChange={() => {}}/>
          <Button onClick={() => this.props.history.goBack()}>back</Button>
          <Button onClick={() => this.props.history.go(-2)}>Go</Button>
      </div>
  );}
}

const mapStateToProps = state => ({
    option: state.selectReducer.options
});
export default connect(mapStateToProps)(App);
