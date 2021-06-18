import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoInput extends Component{
  static propTypes = {
    updateFilterKey: PropTypes.func,
    onSubmit: PropTypes.func
  }

  constructor(){
    super()
    this.state = {
      inputText:''
    }
  }


  toAddItem(){
    if (this.props.onSubmit) {
      this.props.onSubmit({
        id:( new Date()).valueOf(),
        content:this.state.inputText,
        isFinish:false,
      })
    }
    this.setState({ inputText: '' })
  }

  
  handleKeyEnter(event){
    if(event.keyCode === 13) {
      this.toAddItem()
    }
  }

  handleInputChange(event){
    const inputText = event.target.value
    this.setState({inputText})
    this.props.updateFilterKey(inputText)
  }

  toSearch(){
    
  }
  
  render () {
    return(
      <div className="search_input">
        <div className="search_input_left icon iconfont icon-search"></div>
        <div className="search_input_textContainer">
          <input
            type="text"
            placeholder="搜索/回车或右侧添加"
            id="search_input"
            className="search_input_text"
            value={this.state.inputText}
            onChange={this.handleInputChange.bind(this)}
            onKeyUp={this.handleKeyEnter.bind(this)}/>

          <div 
            className="search_input_right icon iconfont icon-add btn" 
            onClick={this.toAddItem.bind(this)}
          ></div>
        </div>
    </div>
    )
  }
}

export default TodoInput