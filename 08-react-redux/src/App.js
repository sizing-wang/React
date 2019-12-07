import React, { Component } from "react";
import {Button, Col, Input, List, Row} from "antd";
import { connect } from "react-redux"
import {
    getChangeItemAction,
    getAddItemAction,
    getDelItemAction,
    getLoadInitActions
} from "./store/actionCreate"

import "./index.css"


// 容器组件
class App extends Component{
    /*
    constructor (props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    handleInput(ev){
        // 获取输入框中数据
        let task = ev.target.value.trim();
        store.dispatch(getChangeItemAction(task));
    };

    handleAdd() {
        store.dispatch(getAddItemAction());
    };

    deleteItem(index){
        store.dispatch(getDelItemAction(index))
    };

    componentDidMount() {
        // 派发action
        store.dispatch(getLoadInitActions())
    }
    */

    componentDidMount() {
        // 发送ajax请求
        this.props.handleInit();
    }

    render() {
        let {lists, task, handleInput, handleAdd, deleteItem} = this.props;
        return (
            <div className="toDo">
                <Row>
                    <Col span={18}>
                        <Input
                            onChange={handleInput}
                            value={task}
                        />
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={handleAdd}>提交</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <List
                            className="list"
                            bordered
                            dataSource={lists}
                            renderItem={(item, index) => (
                                <List.Item
                                    onClick={() => {deleteItem(index)}}
                                >
                                    {item}
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
// 将store中的属性映射到当前组件中
const mapStateToProps = (state) => ({
    lists: state.lists,
    task: state.task
});
// 将store中的方法映射到当前组件中
const mapDispatchToProps = (dispatch) => ({
    handleInput: (ev) => {
        // 获取输入框中数据
        let task = ev.target.value.trim();
        // 派发action
        dispatch(getChangeItemAction(task));
    },
    handleAdd: () => {
        // 派发action
        dispatch(getAddItemAction())
    },
    deleteItem: (index) => {
        // 派发action
        dispatch(getDelItemAction(index))
    },
    handleInit: () => {
        // 初始化数据
        // 派发action, 发送ajax请求
        dispatch(getLoadInitActions())
    }
});
export default connect (mapStateToProps, mapDispatchToProps)(App)