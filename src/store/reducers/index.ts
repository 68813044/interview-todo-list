// import {
//   PLUS_NUM,
//   MINUS_NUM
// } from '../actions'

import initialState from '../states'

interface INumAction{
  type:string,
  num:number
}

const changeNumReducer = (state = initialState, action:INumAction) => {
  switch(action.type){
    case 'PLUS_NUM' :{
      return{
        ...state,
        num:initialState.num + action.num
      }
    }
    case 'MINUS_NUM' :{
      return{
        ...state,
        num:initialState.num - action.num
      }
    }
    default:
      return state
  }
}

export default changeNumReducer