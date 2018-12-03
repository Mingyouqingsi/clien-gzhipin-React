/**
 * Created by 王翔 on 2018-12-3.
 */
import {combineReducers} from 'redux'


const initXxxState  = 0
function xxx(previousState = initXxxState,action) {
  switch (action.type){
    default:
      return previousState
  }
}
const initYyyState  = 0
function yyy(previousState = initYyyState,action) {
  switch (action.type){
    default:
      return previousState
  }
}
export default combineReducers({
  xxx,
  yyy
})