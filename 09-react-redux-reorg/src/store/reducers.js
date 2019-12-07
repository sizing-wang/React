import { combineReducers } from "redux" // 合并子组件的reducer
import {reducer as todoListReducer } from "../pages/todoList/store/store"

export default combineReducers({
    todoList: todoListReducer
})