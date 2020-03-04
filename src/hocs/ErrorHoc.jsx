import React from 'react';

const errorHoc = (WrappedComponent, error) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                errorBack: () => {throw error}
            };
        }
        render() {
            return(<div>
                <WrappedComponent data={this.state.errorBack} />
            </div>)
        }
    };
}
export default errorHoc;
