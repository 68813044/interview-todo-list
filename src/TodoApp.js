import React, { useState,useEffect } from 'react'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'

var listStorage = {
  fetch: function() {
    var list = JSON.parse(localStorage.getItem("todoList") || "[]");
    console.log("get localStorage:",list)
    return list;
  },
  save: function(list) {
    localStorage.setItem("todoList", JSON.stringify(list));
    console.log("save localStorage:",list)
  }
};


const TodoApp = () => {
  const [todoList,setTodoList] = useState([])
  const [filterKey,setFilterKey] = useState('')

  useEffect(() => {
    const temp = listStorage.fetch()
    setTodoList(temp)
  }, [])

  const _saveTodoList = (todoList) => {
    listStorage.save(todoList)
  }

  const addItem = (todoItem) => {
    console.log("addItem：",todoItem)
    const list = [
      ...todoList,
      todoItem
    ]
    setTodoList(list)
    updateFilterKey('')
    _saveTodoList(list)
  }

  const deleteItem = (index) => {
    const list = todoList.filter((item,i) => {
      return i!==index
    })
    setTodoList(list)
    _saveTodoList(list)
  }

  const updateItem = (index) => {
    const list = todoList.map((item,i) => {
      if(i === index){
        item.isFinish = !item.isFinish
      }
      return item
    })
    console.log("new list:",list)
    setTodoList(list)
    _saveTodoList(list)
  }

  const updateFilterKey = (filterKey) => {
    setFilterKey(filterKey)
  }

  return (
    <div className="main">
      <div className="title">My Todo List</div>

      <TodoInput 
        updateFilterKey={updateFilterKey}
        onSubmit={addItem}/> 

      <TodoList 
        todoList={todoList}
        filterKey={filterKey}
        onDeleteItem={deleteItem}
        onUpdateItem={updateItem}/>
    </div>
  )
}

export default TodoApp