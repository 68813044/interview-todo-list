import { createStore, combineReducers } from "redux";
//导入reducer
import  changeNumReducer from "./reducers"

// combineReducers() 将多个 reducer 合并成为一个
// const allReducers = combineReducers({
// 	changeNumReducer
// })
const store = createStore(changeNumReducer);
console.log("store :",store)

export default store;