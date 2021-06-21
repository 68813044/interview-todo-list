// // action类型

// import { string } from "prop-types"

// export const ADD_TODO = 'ADD_TODO'
// export const DELETE_TODO = 'DELETE_TODO'
// export const EDIT_TODO = 'EDIT_TODO'

// // action创建函数

// export const addTodo = (text:string) => ({ type: ADD_TODO, text })
// export const deleteTodo = (id:number) => ({ type: DELETE_TODO, id })
// export const editTodo = (id:number, text:string) => ({ type: EDIT_TODO, id, text })



// test Action


// export const PLUS_NUM = 'PLUS_NUM'
// export const MINUS_NUM = 'MINUS_NUM'

export const plusNum = (num:number) => ({ type: 'PLUS_NUM', num })
export const minusNum = (num:number) => ({ type: 'MINUS_NUM', num })
