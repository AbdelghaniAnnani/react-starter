import React from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react'

export default class PersonList extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {persons: []};
    }
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <List bulleted  items={this.state.persons.map(person => person.name)}/>
        )
    }
}