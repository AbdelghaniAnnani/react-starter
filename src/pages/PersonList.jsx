import React from 'react';

import axios from 'axios';

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
            <ul>
                { this.state.persons.map(person => <div><li>{person.name}: {person.phone}</li></div>)}
            </ul>
        )
    }
}