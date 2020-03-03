import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";

export  default function Items(props){
    console.log(props.data)
    return(
        <div>
            <h2>Items</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                into elec</p>
            <button className="row form-side" type="button" onClick={props.data}>
                Click
            </button>
        </div>
        );
}

