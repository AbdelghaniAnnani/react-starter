import React from 'react';
import {Link} from "react-router-dom";
import PersonList from "./PersonList";
import { Button, Header } from 'semantic-ui-react'

export  default function Contact(props){
    return(
        <div>
            <Header>Contacts</Header>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                into elec</p>
            <PersonList/>
            <Button className="row form-side" type="button" onClick={() => {throw "Parameter is not a number!";}}>
                Click
            </Button>
        </div>
        );
}

