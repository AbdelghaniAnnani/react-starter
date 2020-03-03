import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";

export  default function Categories(props){
    return(
        <div>
            <h2>Categories</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                into elec</p>
            <button className="row form-side" type="button" onClick={() => {throw "Parameter is not a number!";}}>
                Click
            </button>
        </div>
        );
}

