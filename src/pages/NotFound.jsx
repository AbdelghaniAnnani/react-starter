import React, { PureComponent } from 'react';
import {Link} from "react-router-dom";

export  default function NotFound(props){
    return(
        <div>
            <h2>No Page</h2>
            <p>404</p>
            <Link to="/">Back</Link>
        </div>
        );
}

