import React from 'react'

const TodoCategory = (props) => {

  const filterOption = props.filterOption || 'all'

  const toChangeOption = (e) => {
    props.onChangeOption(e.target.id)
  }

  return (
    <div className="search_option">
      <span onClick={toChangeOption} id="all" className={filterOption === 'all'?"active":""}>全部</span>
      <span onClick={toChangeOption} id="isFinish" className={filterOption === 'isFinish'?"active":""}>已完成</span>
      <span onClick={toChangeOption} id="noFinish" className={filterOption === 'noFinish'?"active":""}>未完成</span>
    </div>
  );
}

export default TodoCategory