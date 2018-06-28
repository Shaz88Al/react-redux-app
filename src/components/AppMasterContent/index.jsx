import React, { Component } from 'react'
import logo from './logo.svg'
import './index.css'
import { testAction } from './../../actions/mock'
import Header from './../Header'
import Footer from './../Footer'
import Home from './../Home'

class AppMainContent extends Component {
    render() {
        return (
            <div className="zomato-lite">
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default AppMainContent
