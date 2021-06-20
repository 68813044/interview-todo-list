import React from 'react'

interface propsObj{
  todoItem:todoItemObj,
  index:number,
  onDeleteItem:onDeleteItemFnc,
  onUpdateItem:onUpdateItemFnc,
}

interface todoItemObj{
  content:string,
  isFinish:boolean,
  id:number,
}

interface onDeleteItemFnc{
  (index:number):void
}

interface onUpdateItemFnc{
  (index:number):void
}

const TodoItem = (props:propsObj) => {

  const toUpdateItem = () => {
    props.onUpdateItem(props.index)
  }

  const toDeleteItem = () => {
    props.onDeleteItem(props.index)
  }

  return(
    <div className="result_block">
      <div className="left">
        <input 
          type="checkbox"
          onChange={toUpdateItem}
          checked={props.todoItem.isFinish}/>
      </div>

      <div className={props.todoItem.isFinish?"content isFinish":"content"} >
        <p>{props.todoItem.content}</p>
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