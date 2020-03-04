import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";
import errorHoc from "../hocs/ErrorHoc";
import { Button, Header } from 'semantic-ui-react'

class Items extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return(
        <div>
            <Header>Items</Header>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                into elec</p>
            <Button className="row form-side" type="button" onClick={this.props.data}>
                Click
            </Button>
        </div>
        );
    }
}
export default errorHoc(Items, "Parameter is not a number!");

