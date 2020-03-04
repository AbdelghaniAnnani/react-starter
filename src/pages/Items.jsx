import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";
import errorHoc from "../hocs/ErrorHoc";

class Items extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return(
        <div>
            <h2>Items</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                into elec</p>
            <button className="row form-side" type="button" onClick={this.props.data}>
                Click
            </button>
        </div>
        );
    }
}
export default errorHoc(Items, "Parameter is not a number!");

