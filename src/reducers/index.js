import { combineReducers } from 'redux'
import counters from './counters'
import authentication from './authentication'

export default combineReducers({
  counters,
  authentication
})