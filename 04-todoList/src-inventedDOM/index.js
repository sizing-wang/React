import React, {Component} from "react"
import ReactDOM from "react-dom"

class Task extends Component {

    // state = {
    //     date: ""
    // };

    render() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
        return (
            <div>
                <h1>标准时间</h1>
                <p>{new Date().toLocaleString()}</p>
            </div>
        )
    }
}

ReactDOM.render(<Task />, document.querySelector("#root"));
