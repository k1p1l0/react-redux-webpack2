import React, {Component} from "react";

import {connect} from "react-redux";

import App from "../../components/App/App";

import {getNewValue} from "../../actions/appActions";

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(getNewValue());
    }

    render() {
        const {fetching, fetched, error, key} = this.props.app;

        return (
            <App onClick={this.handleClick} value={key} />
        );
    }
}

const mapStateToProps = (state) => {  
    return {
        app: state.app
    };
};

export default connect(mapStateToProps)(AppContainer);