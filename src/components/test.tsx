import React from 'react'
import {Dispatch} from 'redux'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import { IStoreState } from '../store/states'

const Test = (state:IstateProps,dispatcher:IDispatcherProps) => {

  console.log(state,dispatcher)

  const {plusNum,minusNum} = dispatcher
  dispatcher.plusNum(1)
  // const toMinusNum = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
  //   minusNum(1)
  // }
  // const toPlusNum = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
  //   plusNum(1)
  // }

  return (
    <div>
        <p>计数:{state.num}</p>
        {/* <button type="submit" onClick={toPlusNum}>
          加一
        </button>
        <button type="submit" onClick={toMinusNum}>
          减一
        </button> */}
    </div>
  )
}

//组件状态的interface
interface IstateProps{
  num:number
}

//组件方法的interface
interface IDispatcherProps {
  plusNum: (num:number) => void;
  minusNum: (num:number) => void;
}

//将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state:IStoreState):IStoreState => ({
  num: state.num
})

//将 对应action 插入到组件的 props 中
const mapDispatcherToProps = (dispatch: Dispatch): IDispatcherProps => ({
  plusNum: (num:number) => dispatch(actions.plusNum(num)),
  minusNum: (num:number) => dispatch(actions.minusNum(num)),
});

export default connect(mapStateToProps,mapDispatcherToProps)(Test)
