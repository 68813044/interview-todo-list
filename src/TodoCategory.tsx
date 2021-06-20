import React from 'react'

interface Props{
  filterOption:string,
  onChangeOption:onChangeOptionFnc
}

interface onChangeOptionFnc{
  (id:string):void
}

const TodoCategory = (props:Props) => {

  const filterOption = props.filterOption

  const toChangeOption = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    // console.log(e.target.id)   //err:https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget
    const target = e.target as HTMLTextAreaElement
    props.onChangeOption(target.id)
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