import React from 'react';
import { Select } from 'semantic-ui-react'

export  default function Dropdown(props) {
    var choices = [ "js", "python", "ruby"];
    console.log(props.data)
    return (
        <div>
            <label>Choose an option:</label>
            <Select onChange={(event) => {
                console.log(event.target.value);
                props.parentCallback(event.target.value);
            }} options={choices.map(choice => ({"key": choice, "value": choice, "text": choice}))}/>

        </div>
    );
  }
