import {
    CHANGE_ITEM,
    ADD_ITEM,
    DEL_ITEM,
    LOAD_ITEM
} from "./actionTypes"

let defaultState = {
    lists: ["吃饭", "睡觉", "打豆豆", "狂敲代码", "头条", "玩游戏"],
    task: ""
};

let reducers = (state = defaultState, action) => {
    if (action.type === CHANGE_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.task = action.payload;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.lists.push(newState.task);
        newState.task = "";
        return newState
    }
    if (action.type === DEL_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.lists.splice(action.payload, 1);
        return newState
    }
    if (action.type === LOAD_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.lists = action.payload;
        return newState
    }
    return state
};

export default reducers