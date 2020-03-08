import React, { PureComponent } from 'react';
import { Button, Header } from 'semantic-ui-react'

class Categories extends React.Component{
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    render() {
        return(
            <div>
                <Header>Categories</Header>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    into elec</p>
                <Button className="row form-side" type="button" onClick={() => {
                    this.setState({count: this.state.count + 1},
                        () => { console.log(this.state.count); });
                }}>
                    Click
                </Button>
            </div>
            )
        }
}
export default Categories;