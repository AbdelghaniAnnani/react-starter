import React from 'react';
import { Select } from 'semantic-ui-react'
import { connect } from "react-redux";
import { setOption } from "../modules/actions"

const Dropdown = (props) => {
    const choices = [ "js", "python", "ruby"];
    return (
        <div>
            <label>Choose an option:</label>
            <Select onChange={(e, { value }) => {
                props.sendOption(value)
            }} options={choices.filter(choice => choice.startsWith(props.filter)).map(choice =>
                ({"key": choice, "value": choice, "text": choice}))}/>

        </div>
    );
};

const mapDispatchToProps = (dispatch) =>({
    sendOption: value => dispatch(setOption(value)),
});

const mapStateToProps = state => ({
    filter: state.filterReducer.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);