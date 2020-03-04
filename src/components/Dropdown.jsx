import React from 'react';

export  default function Dropdown(props) {
    var choices = [ "js", "python", "ruby"];
    console.log(props.data)
    return (
        <div>
            <label>Choose an option:</label>
            <select onChange={(event) => {
                console.log(event.target.value);
                props.parentCallback(event.target.value);
            }}>
                {
                    choices.filter(choice => choice.startsWith(props.data)).map(choice  =>  <option key={choice} value={choice}>{choice}</option>)
                }        
            </select>
        </div>
    );
  }
