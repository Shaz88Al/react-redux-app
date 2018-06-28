import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './index.css';
import { testAction } from './../../actions/mock'
class AppMainContent extends Component {
    componentWillMount () {
        this.props.dispatch(testAction('testing'));
    }  

    componentDidMount () {
        console.log(this.props.mock.testData)
    }
    render() {
        console.log(this.props.mock.testData)
        return (
            <div className="zomato-lite">
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        mock: state.mockReducer
    };
}

export default connect(mapStateToProps)(AppMainContent);
