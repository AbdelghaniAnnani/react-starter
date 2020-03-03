function errorHoc(WrappedComponent, error) {
    return class extends React.Component {
        throwError = () => {throw error};
        constructor(props) {
            super(props);
            this.state = {
                errorBack: this.throwError()
            };
        }
        render() {

            return <WrappedComponent data={this.state.errorBack} />;
        }
    };
}