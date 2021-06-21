import React, { useState,useEffect } from 'react'
import TodoCategory from './TodoCategory'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Test from './test'


interface todoItemObj{
  content:string,
  isFinish:boolean,
  id:number,
}

var listStorage = {
  fetch: function() {
    var list = JSON.parse(localStorage.getItem("todoList") || "[]");
    console.log("get localStorage:",list)
    return list;
  },
  save: function(list:todoItemObj[]) {
    localStorage.setItem("todoList", JSON.stringify(list));
    console.log("save localStorage:",list)
  }
};

const TodoApp = () => {

  const [todoList,setTodoList] = useState<todoItemObj[]>([])
  const [filterKey,setFilterKey] = useState('')
  const [filterOption,setFilterOption] = useState('all')

  useEffect(() => {
    const temp = listStorage.fetch()
    setTodoList(temp)
  }, [])

  const _saveTodoList = (todoList:todoItemObj[]) => {
    listStorage.save(todoList)
  }

  const addItem = (todoItem:todoItemObj) => {
    console.log("addItem：",todoItem)
    const list = [
      ...todoList,
      todoItem
    ]
    setTodoList(list)
    updateFilterKey('')
    _saveTodoList(list)
  }

  const deleteItem = (index:number) => {
    const list = todoList.filter((item:todoItemObj,i) => {
      return i!==index
    })
    console.log("delete list:",list)
    setTodoList(list)
    _saveTodoList(list)
  }

  const updateItem = (index:number) => {
    const list = todoList.map((item:todoItemObj,i) => {
      if(i === index){
        item.isFinish = !item.isFinish
      }
      return item
    })
    console.log("update list:",list)
    setTodoList(list)
    _saveTodoList(list)
  }

  const updateFilterKey = (filterKey:string) => {
    // console.log("updateFilterKey:",filterKey)
    setFilterKey(filterKey)
  }

  const changeOption = (filterOption:string) => {
    setFilterOption(filterOption)
  }

  return (
    <div className="main">
      <Test />
      
      <div className="title">My Todo List</div>

      <TodoInput 
        updateFilterKey={updateFilterKey}
        onSubmit={addItem}/> 

      <TodoCategory
        filterOption={filterOption}
        onChangeOption={changeOption}
        />

      <TodoList 
        todoList={todoList}
        filterKey={filterKey}
        filterOption={filterOption}
        onDeleteItem={deleteItem}
        onUpdateItem={updateItem}/>

    </div>
  )
}

export default TodoApp