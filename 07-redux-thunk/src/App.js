import React, { Component } from "react";
import store  from "./store/store";
import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getLoadInitActions
} from "./store/actionCreate"
import axios from "axios";


// import AppUI from "./store/appUI";
import getAppUI from "./store/appUI";

import "./index.css"


// 容器组件
export default class App extends Component{
    render() {
        let { lists, task, handleInput, handleAdd,  deleteItem } = this.props;

        return (
            <getAppUI
                lists={lists}
                task={task}
                handleInput={handleInput}
                handleAdd={handleAdd}
                deleteItem={deleteItem}
            />
        )
    }
}