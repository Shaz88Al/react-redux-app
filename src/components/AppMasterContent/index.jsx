import React, { Component } from 'react'
import './index.css'
import Header from './../Header'
import Footer from './../Footer'
import Home from './../Home'
import { Row, Col } from 'react-bootstrap'

class AppMainContent extends Component {
    render() {
        return (
            <Row className="zomaaato-lite">
                <Col>
                <Header />
                <Home />
                <Footer />
                </Col>
            </Row>
        );
    }
}

export default AppMainContent
