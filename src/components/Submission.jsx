import React, { PureComponent } from 'react';
import Dropdown from './Dropdown.jsx'
import { Button, Input } from 'semantic-ui-react'
import {connect} from "react-redux";
import {setFilter} from "../modules/actions";

class Submission extends React.PureComponent{
    constructor(props){
        super(props);
    }

    render () {
       return (
           <div>
                <h2>Form Submission</h2>
                <Dropdown/>
                <Input type="text" className="row form-side ui focus input" onChange={(event) => this.props.setFilter(event.target.value)}/>
                <Button className="row form-side ui primary  button" type="button" onClick={this.sendData}>Click</Button>
           </div>
       )
    }
  }
const mapDispatchToProps = (dispatch) =>({
    setFilter: value => dispatch(setFilter(value)),
});

export default connect(null, mapDispatchToProps)(Submission);
