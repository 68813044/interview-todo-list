import React from 'react'

const TodoItem = (props) => {

  const todoItem = props.todoItem || {}
  const index = props.index

  const toUpdateItem = () => {
    props.onUpdateItem(index)
  }

  const toDeleteItem = () => {
    props.onDeleteItem(index)
  }

  return(
    <div className="result_block">
      <div className="left">
        <input 
          type="checkbox"
          onChange={toUpdateItem}
          checked={todoItem.isFinish}/>
      </div>

      <div className={todoItem.isFinish?"content isFinish":"content"} >
        <p>{todoItem.content}</p>
      </div>

      <div 
        className="right btn" 
        onClick={toDeleteItem}>
        <span>删除</span>
      </div>
      
    </div>
  )

}


export default TodoItem