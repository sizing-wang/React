import React, {Component} from "react"
import ReactDOM from "react-dom"

/*
 挂载组件时, 会先自动走到constructor中, 再走到getDerivedStateFromProps中, 再走到render中, 再走到componentDidMount中
*/


class Task extends Component {

    state = {
        value: ''
    };
    /*
    挂载组件
    constructor (props) {
        super(props);
        console.log("Task constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Task getDerivedStateFromProps");
        // 返回的值是一个对象, 会和state这个数据对象合并, 并返回最新的数据
        // 多用于如果props有变化,需要更新state的场景,该方法返回state的更新
        return null
    }

    componentDidMount() {
        // 发送ajax请求, 操作异步任务处理
        console.log("Task componentDidMount");
    }
    */

    // 更新组件
    inputValue = () => {
        const value = this.input.value.trim();
        this.setState({value})
    };
    static getDerivedStateFromProps(props, state) {
        // 多用于如果props有变化,需要更新state的场景,该方法返回state的更新
        console.log("getDerivedStateFromProps", state);
        return {state}
        // return null
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 当state发生变化的时候, 根据发生的变化返回布尔值,根据返回的布尔值决定是否执行后续的周期函数,一般用来阻止不必要的页面渲染
        // return false
        console.log("shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // 该方法返回一个值,这个值会随后被传入到 componentDidUpdate 中使用
        // ( 在组件更新完成之前, 保存更新前的状态信息 )
        console.log("上一次的props和state", prevProps, prevState);
        return 123
    }

    componentDidUpdate(prevProps, prevState,snapshot) {
        // 组件更新完成后执行
        console.log("更新完成后", snapshot);
    }

    componentWillUnmount() {
        // 组件将要卸载时调用
        console.log("componentWillUnmount");
    }
    render() {
        console.log("Task render");
        return (
            <div>
                <input type="text" onChange={this.inputValue} ref={input => this.input = input}/>
                <button>提交</button>
            </div>
        )
    }
}

ReactDOM.render(<Task />, document.querySelector("#root"));
