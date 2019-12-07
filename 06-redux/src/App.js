import React, { Component } from "react";
import store  from "./store/store";
import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getLoadInitAction
} from "./store/actionCreate"
import axios from "axios";


// import AppUI from "./store/appUI";
import getAppUI from "./store/appUI";

import "./index.css"


// 容器组件
export default class App extends Component{

    constructor (props) {
        super(props);
        // this.state = {
        //     lists: ["吃饭", "睡觉", "打豆豆", "狂敲代码", "头条"],
        //     task: ""
        // };
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        // console.log("store", store);
        // console.log(store.getState());
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    handleInput(ev){
        // 获取输入框中数据
        let task = ev.target.value.trim();
        // 派发action
        // let action = {
        //     type: CHANGE_ITEM,
        //     payload: task
        // };
        store.dispatch(getChangeItemAction(task));

    };

    handleAdd() {
        // 派发action
        // let action = {
        //     type: ADD_ITEM,
        // };
        store.dispatch(getAddItemAction());
    };

    deleteItem(index){
        // 派发action
        // let action = {
        //     type: DEL_ITEM,
        //     payload: index
        // };
        store.dispatch(getDelItemAction(index))
    };

    /*
    getItems(lists){
        return lists.map((item, index) => (
            <Item
                key={index}
                item={item}
                deleteItem={this.deleteItem.bind(this, index)}
            />
        ))
    };
    */

    componentDidMount() {
        /*
        // 使用axios发送ajax请求
        axios.get("http://127.0.0.1:3000")
            .then(result => {
                // 派发action
                store.dispatch(getLoadInitAction(result.data))
            })
            .catch(err => {
                console.log(err);
            })
         */
        // 派发action
        store.dispatch(getLoadInitAction())
    }

    render() {
        let { lists, task } = this.state;
        let options = {
            handleInput: this.handleInput,
            handleAdd: this.handleAdd,
            deleteItem: this.deleteItem,
            lists,
            task
        };
        return (
            /*
           <AppUI
               task={task}
               lists={lists}
               handleInput={this.handleInput}
               handleAdd={this.handleAdd}
               deleteItem={this.deleteItem}
           />
             */
            getAppUI(options)
        )
    }
}