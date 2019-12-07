import { CHANGE_ITEM, ADD_ITEM, DEL_ITEM, LOAD_ITEM } from "./actionTypes"
import axios from "axios"

export const getChangeItemAction = (task) => ({
    type: CHANGE_ITEM,
    payload: task
});
export const getAddItemAction = () => ({
    type: ADD_ITEM
});
export const getDelItemAction = (index) => ({
    type: DEL_ITEM,
    payload: index
});
/*
export const getLoadInitAction = (data) => ({
    type: LOAD_ITEM,
    payload: data
});
 */
export const getLoadInitAction = () => {
    // 使用axios发送ajax请求
    /*
    错误写法
    axios.get("http://127.0.0.1:3000")
        .then(result => {
            // 派发action
            return {
                type: LOAD_ITEM,
                payload: data
            }
        })
        .catch(err => {
            console.log(err);
        })
     */


};