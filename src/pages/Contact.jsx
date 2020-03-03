import React from 'react';
import {Link} from "react-router-dom";
import PersonList from "./PersonList";

export  default function Contact(props){
    return(
        <div>
            <h2>Contacts</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                into elec</p>
            <PersonList/>
            <button className="row form-side" type="button" onClick={() => {throw "Parameter is not a number!";}}>
                Click
            </button>
        </div>
        );
}

