import React, { Component } from "react";

import TodoList from "./pages/todoList/index"

import "./index.css"


// 容器组件
class App extends Component{

    render() {
        return (
           <TodoList />
        )
    }
}

export default App