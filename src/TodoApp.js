import React, { Component } from 'react'
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


class TodoApp extends Component {
  constructor () {
    super()
    this.state = {
      todoList: [],
      filterKey:''
    }
  }

  componentWillMount(){
    this.setState({
      todoList:listStorage.fetch()
    })
  }

  _saveTodoList(todoList){
    listStorage.save(todoList)
  }

  addItem(todoItem){
    if(this.inputText === ''){
      return alert('请输入待办内容')
    }
    console.log("addItem：",todoItem)
    const todoList = this.state.todoList
    todoList.push(todoItem)
    this.setState({ todoList })
    this._saveTodoList(todoList)
  }

  deleteItem(index){
    const todoList = this.state.todoList
    todoList.splice(index, 1)
    this.setState({ todoList })
    this._saveTodoList(todoList)
  }

  updateItem(index){
    const todoList = this.state.todoList
    todoList[index].isFinish = !todoList[index].isFinish
    this.setState({ todoList })
    this._saveTodoList(todoList)
  }

  updateFilterKey(filterKey){
    this.setState({ filterKey })
  }


  render(){
    return (
      <div className="main">
        <div className="title">My Todo List</div>

        <TodoInput 
          updateFilterKey={this.updateFilterKey.bind(this)}
          onSubmit={this.addItem.bind(this)}/> 

        <TodoList 
          todoList={this.state.todoList}
          filterKey={this.state.filterKey}
          onDeleteItem={this.deleteItem.bind(this)}
          onUpdateItem={this.updateItem.bind(this)}/>

      </div>
    )
  }
}

export default TodoApp