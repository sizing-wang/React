import * as type from "./actionTypes"

let defaultState = {
    lists: ["吃饭", "睡觉", "打豆豆", "狂敲代码", "头条", "玩游戏"],
    task: ""
};

let reducers = (state = defaultState, action) => {
    if (action.type === type.CHANGE_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.task = action.payload;
        return newState;
    }
    if (action.type === type.ADD_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.lists.push(newState.task);
        newState.task = "";
        return newState
    }
    if (action.type === type.DEL_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.lists.splice(action.payload, 1);
        return newState
    }
    if (action.type === type.LOAD_ITEM) {
        // 更新数据
        const newState = JSON.parse(JSON.stringify(state));
        newState.lists = action.payload;
        return newState
    }
    return state
};

export default reducers