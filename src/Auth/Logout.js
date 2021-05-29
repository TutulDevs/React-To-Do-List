import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { authLogout } from "../store/actions/authAction";

class Logout extends Component {

    // first thing to do after rendering the page
    componentDidMount() {
        this.props.onLogout();
    }

    // redirect to the main page
    render() {
        return <Redirect to='/home' />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authLogout()),
    }
}

export default connect(null, mapDispatchToProps)(Logout);