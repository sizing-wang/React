import React, { Component } from "react";
import PropTypes from "prop-types"

export default class Item extends Component{

    static propTypes = {
        item: PropTypes.string.isRequired
    }

    render() {
        let {item, deleteItem} = this.props;
        return (
            <li onClick={deleteItem}>{item}</li>
        )
    }
}