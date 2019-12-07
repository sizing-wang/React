import React, { Component } from "react";
import { Input, Button, Row, Col, List } from "antd"
import "../index.css"


// UI组件
/*
export default class AppUI extends Component{

    render() {
        return (
            <div className="toDo">
                <Row>
                    <Col span={18}>
                        <Input
                            onChange={this.props.handleInput}
                            value={this.props.task}
                        />
                    </Col>
                    <Col span={6}>
                        <Button type="primary" onClick={this.props.handleAdd}>提交</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={18}>
                        <List
                            className="list"
                            bordered
                            dataSource={this.props.lists}
                            renderItem={(item, index) => (
                                <List.Item
                                    onClick={() => {this.props.deleteItem(index)}}
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
*/

// 无状态组件
const getAppUI = (props) => {
    let {lists, task, handleInput, handleAdd, deleteItem} = props;
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
};
export default getAppUI

