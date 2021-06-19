import React from 'react'
import TodoItem from './TodoItem.js'

const TodoList = (props) => {

  const todoList = props.todoList
  const filterKey = props.filterKey
  const filterOption = props.filterOption

  const todoListElements = []

  const judgeOption = (item) => {
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
        onDeleteItem={props.onDeleteItem}
        onUpdateItem={props.onUpdateItem}
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