import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
  static propTypes = {
    todoItem: PropTypes.object,
    index:PropTypes.number,
  }

  render () {
    const todoItem = this.props.todoItem || {}
    const index = this.props.index

    return(
      <div className="result_block">
        <div className="left">
          <input 
            type="checkbox"
            onChange={this.props.onUpdateItem.bind(this,index)}
            checked={todoItem.isFinish}/>
        </div>

        <div className={todoItem.isFinish?"content isFinish":"content"} >
          <p>{todoItem.content}</p>
        </div>

        <div 
          className="right btn" 
          onClick={this.props.onDeleteItem.bind(this,index)}>
          <span>删除</span>
        </div>
        
      </div>
    )
  }

}


export default TodoItem