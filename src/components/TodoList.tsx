import React from 'react'
import TodoItem from './TodoItem'
import {ITodoItemObj} from '../interface'

interface Props{
  todoList:ITodoItemObj[],
  filterKey:string,
  filterOption:string,
  onDeleteItem:onDeleteItemFnc,
  onUpdateItem:onUpdateItemFnc
}

interface onDeleteItemFnc{
  (index:number):void
}

interface onUpdateItemFnc{
  (index:number):void
}

const TodoList = (props:Props) => {

  const {
    todoList,filterKey,filterOption,onDeleteItem,onUpdateItem
  } = props

  const todoListElements = []

  const judgeOption = (item:ITodoItemObj) => {
    if(filterOption === 'all') return true
    return filterOption === 'isFinish'?item.isFinish:!item.isFinish
  }

  for (let i = 0; i < todoList.length; i++) {
    const item = todoList[i];
    if(judgeOption(item) && item.content.indexOf(filterKey) !== -1){
      todoListElements.push(
        <TodoItem 
        todoItem={item}
        key={item.id}
        index={i}
        onDeleteItem={onDeleteItem}
        onUpdateItem={onUpdateItem}
      />
      )
    }
  }

  return(
    <div className="search_result">
      <div className="result_list">
        {todoListElements}
      </div>
    </div>
  )
}

export default TodoList