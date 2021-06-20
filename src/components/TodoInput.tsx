import React, { useState } from 'react'

interface propsObj{
  updateFilterKey:updateFilterKeyFnc,
  onSubmit:onSubmitFnc
}

interface updateFilterKeyFnc{
  (inputText:string):void
}

interface onSubmitFnc{
  (todoItem:todoItemObj):void
}

interface todoItemObj{
  content:string,
  isFinish:boolean,
  id:number,
}

const TodoInput = (props:propsObj) => {
  
  const [inputText,setInputText] = useState('')

  const toAddItem = () => {
    if(inputText === ''){
      return alert('请输入待办内容')
    }

    if (props.onSubmit) {
      props.onSubmit({
        id:(new Date()).valueOf(),
        content:inputText,
        isFinish:false,
      })
    }
    setInputText('')
  }

  const handleKeyEnter = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if(event.code === 'Enter') {
      toAddItem()
    }
  }

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    // console.log('input:',event.target.value)
    const inputText = event.target.value
    setInputText(inputText)
    props.updateFilterKey(inputText)
  }

  return(
    <div className="search_input">
      <div className="search_input_left icon iconfont icon-search"></div>
      <div className="search_input_textContainer">
        <input
          type="text"
          placeholder="搜索/回车或右侧添加"
          id="search_input"
          className="search_input_text"
          value={inputText}
          onChange={handleInputChange}
          onKeyUp={handleKeyEnter}/>

        <div 
          className="search_input_right icon iconfont icon-add btn" 
          onClick={toAddItem}
        ></div>
      </div>
  </div>
  )
}

export default TodoInput