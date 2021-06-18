import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem.js'

class TodoList extends Component{
  static propTypes = {
    filterKey: PropTypes.string,
    todoList: PropTypes.array,
    onDeleteItem: PropTypes.func,
    onUpdateItem: PropTypes.func
  }

  static defaultProps = {
    todoList:[],
    filterKey:''
  }

  render () {
    const todoList = this.props.todoList

    //过滤后显示
    const todoListElements = []
    for (let i = 0; i < todoList.length; i++) {
      const item = todoList[i];
      if(item.content.indexOf(this.props.filterKey) != -1){
        todoListElements.push(
          <TodoItem 
          todoItem={item}
          key={item.id}
          index={i}
          onDeleteItem={this.props.onDeleteItem.bind(this)}
          onUpdateItem={this.props.onUpdateItem.bind(this)}
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
}

export default TodoList