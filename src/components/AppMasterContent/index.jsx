import React, { Component } from 'react'
import Header from './../Header'
import Footer from './../Footer'
import Home from './../Home'

class AppMainContent extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default AppMainContent
