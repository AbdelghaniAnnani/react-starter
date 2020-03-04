import React, { PureComponent } from 'react';
import Dropdown from './Dropdown.jsx'
import { Button, Input } from 'semantic-ui-react'

export default class Submission extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {data: "", option: "" };
        this.sendData = this.sendData.bind(this)
    }
    callbackFunction = (childData) => {
        console.log(childData);
        this.setState({option: childData}, () => {console.log(this.state)});
    };
    sendData = () => {
        console.log(this.state);
        this.props.parentCallback(this.state.option);
    };
    render () {
       return (<div>
            <h2>Form Submission</h2>
            <Dropdown data={this.state.data} parentCallback = {this.callbackFunction}/>
            <Input type="text" className="row form-side ui focus input"/>
       <Button className="row form-side ui primary  button" type="button" onClick={this.sendData}>Click</Button>
        </div>)
    }
  }
