import React, { Component } from "react";
import Item from "./item";
import { Input, Button, Row, Col, List } from "antd"
// import 'antd/dist/antd.css'

import "./index.css"
import index from "babel-plugin-import/src";

export default class App extends Component{

    constructor (props) {
        super(props);
        this.state = {
            lists: ["吃饭", "睡觉", "打豆豆", "狂敲代码", "头条"],
            task: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.deleteItem = this.deleteItem.bind(this)
    }


    handleInput(ev){
        // 获取输入框中数据
        let task = ev.target.value.trim();
        this.setState({
            task
        })
    };

    handleAdd() {
        // 更新状态
        let lists = [...this.state.lists, this.state.task];
        this.setState({
            lists,
            task: ""
        })
    };

    deleteItem(index){
        let lists = [...this.state.lists];
        lists.splice(index, 1);
        // 更新状态
        this.setState({
            lists
        })
    };


    getItems(lists){
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
                {/*<input type="text" onChange={this.handleInput} ref={input => this.input = input} value={this.state.task}/>*/}
                {/*<button className="btn" onClick={this.handleAdd}>提交</button>*/}
                {/*<ul className="list">*/}
                {/*    {*/}
                {/*        this.getItems(lists)*/}
                {/*    }*/}
                {/*</ul>*/}
                <Row>
                    <Col span={18}>
                        <Input
                            onChange={this.handleInput}
                            value={this.state.task}
                        />
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.handleAdd}>提交</Button>
                    </Col>
                </Row>
                <List
                    className="list"
                    bordered
                    dataSource={lists}
                    renderItem={(item, index) => (
                        <List.Item
                            onClick={this.deleteItem.bind(this, index)}
                        >
                            {item}
                        </List.Item>
                    )}
                />

            </div>
        )
    }
}