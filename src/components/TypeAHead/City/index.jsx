import React, { Component } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { connect } from "react-redux";
import OptionTemplate from './OptionTemplate'
import { fetchCity, selectedCity } from './../../../actions/search'
class TypeAHeadCity extends Component {
    constructor (props) {
        super (props)
        this.state = {
            allowNew: false,
            isLoading: false,
            multiple: false,
            options: [],
        }
    }

    _handleSearch = (query) => {
        this.setState({isLoading: true});
        this.props.dispatch(fetchCity(query))
            .then((options) => {
                this.setState({
                isLoading: false,
                options,
            })
        })
    }

    _renderMenuItemChildren (option, props, index) {
        return (
            <div key="name">
                {option.name}
            </div>
        )
    }

    handleChange (selection) {
        localStorage.setItem('selectedCity', JSON.stringify(selection))
        this.props.dispatch(selectedCity(selection))
    }

    render () {
        // Below line can be replace with props from Parent
        const selectedCity = localStorage.getItem('selectedCity') ? JSON.parse(localStorage.getItem('selectedCity')) : []
        return (
            <AsyncTypeahead
                {...this.state} 
                onChange={(selection) => this.handleChange(selection)}
                ref='typeaheadCity'
                minLength={3}
                labelKey="name"
                onSearch={this._handleSearch}
                placeholder='Enter City Name'
                options={this.state.options}
                selectHintOnEnter={true}
                selected={selectedCity || []}
                renderMenuItemChildren={(option, props, index) => this._renderMenuItemChildren(option, props, index)}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        search: state.search
    };
}

export default connect(mapStateToProps)(TypeAHeadCity)