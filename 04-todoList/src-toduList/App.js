import React, { Component } from "react";
import Item from "./item";
import "./index.css"

export default class App extends Component{

    /*
    handleClick () {
        alert("btn click ... ");
        console.log(this)
    }
    */

    state = {
        lists: ["吃饭", "睡觉", "打豆豆", "狂敲代码", "头条"],
        task: ''
    };

    handleInput = () => {
        // 获取输入框中数据
        let task = this.input.value.trim();
        this.setState({
            task
        })
    };

    handleAdd = () => {
        // 更新状态
        let lists = [...this.state.lists, this.state.task];
        this.setState({
            lists,
            task: ""
        })
    };

    deleteItem = (index) => {
        let lists = [...this.state.lists];
        lists.splice(index, 1);
        // 更新状态
        this.setState({
            lists
        })
    };

    componentWillUnmount() {
        // 组件将要卸载时调用
        console.log("componentWillUnmount");
    }

    getItems = (lists) => {
        return lists.map((item, index) => (
            <Item
                key={index}
                item={item}
                deleteItem={this.deleteItem.bind(this, index)}
            />
        ))
    };

    render() {
        let { lists } = this.state;
        return (
            <div className="toDo">
                <input type="text" onChange={this.handleInput} ref={input => this.input = input} value={this.state.task}/>
                {/*<button className="btn" onClick={this.handleClick.bind(this)}>提交</button>*/}
                <button className="btn" onClick={this.handleAdd}>提交</button>
                <ul className="list">
                    {
                        /*
                        <li>吃饭</li>
                        <li>睡觉</li>
                        <li>写代码</li>
                         */
                        /*
                        lists.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                         */
                        this.getItems(lists)
                    }

                </ul>
            </div>
        )
    }
}