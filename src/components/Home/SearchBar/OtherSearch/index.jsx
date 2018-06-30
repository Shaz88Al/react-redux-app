import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead'
import { fetchSearchResult } from './../../../../actions/search'

class OtherSearch extends Component {
    changeObjectKey (array) {
        const updatedArray = []
        array.forEach((obj, index) => {
            const updatedObj = {
                id: obj.cuisine_id,
                name: obj.cuisine_name,
                objectType: obj.objectType
            }
            updatedArray.push(updatedObj)
        })
        return updatedArray
    }
    combineSearchTypes () {
        return [...this.changeObjectKey(this.props.cuisinesTypes), ...this.props.categoryTypes]
    }

    renderMenuItemChildren (option, props, index) {
        return (
          <div>  
            <Highlighter key="name" search={props.text}>
                {option.name}
            </Highlighter>
            <div key="objectType">
                <small>
                {option.objectType.toLocaleString()}
                </small>
            </div>
          </div>
        )
    }

    handleChange (selection) {
        this.props.dispatch(fetchSearchResult(selection))
    }

    render () {
        const searchObject = this.combineSearchTypes()
        return (
            <Typeahead
                labelKey="name"
                options={searchObject}
                placeholder="Enter a Cauisines, Category or Locality"
                renderMenuItemChildren={(option, props, index) => this.renderMenuItemChildren(option, props, index)}
                onChange={(selection) => this.handleChange(selection)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cuisinesTypes: state.search.cuisinesTypes,
        categoryTypes: state.search.categoryTypes
    }
}

export default connect(mapStateToProps)(OtherSearch)