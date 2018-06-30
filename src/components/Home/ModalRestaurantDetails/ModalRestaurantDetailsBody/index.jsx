import React, { Component } from 'react'
import { Row, Col, Glyphicon } from 'react-bootstrap'
import './index.css'

class ModalRestaurantDetailsBody extends Component {
    render () {
        const details = this.props.details
        return (
            <Row>
                <Col lg={4}>
                    <div>
                        <strong>Cuisines</strong>
                    </div>
                    <div>   
                        <small>{details.cuisines}</small>
                    </div>
                    <div>
                        <strong>Average Cost for Two</strong>
                    </div>
                    <div>   
                        <small>{details.average_cost_for_two}</small>
                    </div>
                </Col>
                <Col lg={4}>
                    <div>
                        <strong>Address</strong>
                    </div>
                    <div>   
                        <small>{details.location ? details.location.address : 'N/A'}</small>
                    </div>
                </Col>
                <Col lg={4}>
                    <div>
                        <strong>More Info</strong>
                    </div>
                    <div>
                        {
                            details.has_online_delivery ?
                            <Glyphicon glyph="remove" bsClass='textRed glyphicon'/>
                            : <Glyphicon glyph="ok" bsClass='textGreen glyphicon'/>
                        }
                          
                        <small>Home Delivery</small>
                    </div>
                    <div>
                        {
                            details.is_zomato_book_res ?
                            <Glyphicon glyph="remove" bsClass='textRed glyphicon'/>
                            : <Glyphicon glyph="ok" bsClass='textGreen glyphicon'/>
                        }
                          
                        <small>Zomato Booking</small>
                    </div>
                    <div>
                        {
                            details.has_table_booking ?
                            <Glyphicon glyph="remove" bsClass='textRed glyphicon'/>
                            : <Glyphicon glyph="ok" bsClass='textGreen glyphicon'/>
                        }
                          
                        <small>Table Reservation</small>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default ModalRestaurantDetailsBody