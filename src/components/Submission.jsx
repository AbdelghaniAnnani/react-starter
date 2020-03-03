import React, { PureComponent } from 'react';
import Dropdown from './Dropdown.jsx'

export default class Submission extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {data: ""};
    }
    
    render () {
       return (<div>
            <h2>Form Submission</h2>
            <Dropdown data={this.state.data}/>    
            <input type="text" className="row form-side" onChange={val => this.setState({data: val.target.value})}/>
       <button className="row form-side" type="button" onClick={() => {console.log("hi")}}>Click</button>
        </div>)
    }
  }
