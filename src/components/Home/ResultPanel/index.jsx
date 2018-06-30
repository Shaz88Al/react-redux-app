import React, { Component } from 'react'
import { Row, Col, Badge, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { resetSearch } from './../../../actions/search'
import './index.css'

class ResultPanel extends Component {
    componentWillUnmount () {
        this.props.dispatch(resetSearch())
    }
    getBody () {
       return this.props.searchResult.map((res, index) => {
            return (
                <Row bsClass="row-style row" key={`row-${index}`}>
                    <Col lg={4}>
                        <strong>
                            {res.name}
                        </strong>
                        <div>
                            <small>
                                {res.location.locality}
                            </small>
                        </div>
                    </Col>
                    <Col lg={4} lgOffset={4}>
                        <Badge style={{color: `#${res.user_rating.rating_color}`}}>
                            {res.user_rating.aggregate_rating}
                        </Badge>
                        <div>
                            <small>
                                {res.cuisines}
                            </small>
                        </div>
                    </Col>
                </Row>
            )
        })
    }
    render () {
        if (this.props.searchResult.length === 0) {
            return <div/>
        }
        return (
            <Panel>
                <Panel.Heading>Search Results</Panel.Heading>
                <Panel.Body>{ this.getBody() }</Panel.Body>
                <Panel.Footer></Panel.Footer>
            </Panel>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searchResult: state.search.searchResult
    }
}

export default connect(mapStateToProps)(ResultPanel)