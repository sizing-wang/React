import React, { Component } from "react";
import PropTypes from "prop-types"

export default class Item extends Component{

    render() {
        let {item, deleteItem} = this.props;
        return (
            <li onClick={deleteItem}>{item}</li>
        )
    }
}

Item.propTypes = {
    item: PropTypes.string.isRequired
}