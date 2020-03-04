import React, { PureComponent } from 'react';

class Categories extends React.Component{
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    render() {
        return(
            <div>
                <h2>Categories</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    into elec</p>
                <button className="row form-side" type="button" onClick={() => {
                    this.setState({count: this.state.count + 1},
                        () => { console.log(this.state.count); });
                }}>
                    Click
                </button>
            </div>
            )
        }
}
export default Categories;