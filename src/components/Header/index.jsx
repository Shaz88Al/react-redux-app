import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'
import TypeAhead from './../TypeAHead/City'
import './index.css'

class Header extends Component {
    render () {
        return (
            <div className="headerBorder">
                <Row>
                    <Col lg={2} xs={6} bsClass="padding col">
                        <h4 className="title">
                            ZOMAAATO LITE
                        </h4>    
                    </Col>
                    <Col lg={2} xs={6} lgOffset={8} bsClass="padding col">
                        <TypeAhead />
                    </Col>
                </Row>
                 
            </div>   
        )
    }
}

export default Header