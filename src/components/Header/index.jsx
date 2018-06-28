import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'
import TypeAhead from './../TypeAHead/City'
import './index.css'

class Header extends Component {
    render () {
        return (
            <div>
                <Row bsClass="marginTop">
                    <Col lg={2} bsClass="padding col">
                        <h2>
                            ZOMATO
                        </h2>    
                    </Col>
                    <Col lg={8} />
                    <Col lg={2} bsClass="padding col">
                        <label >
                            Change City
                        </label>
                        <TypeAhead />
                    </Col>
                </Row> 
            </div>   
        )
    }
}

export default Header