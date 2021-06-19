import React from 'react'
import TodoItem from './TodoItem.js'

const TodoList = (props) => {

  const todoList = props.todoList

  const todoListElements = []
  for (let i = 0; i < todoList.length; i++) {
    const item = todoList[i];
    if(item.content.indexOf(props.filterKey) !== -1){
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