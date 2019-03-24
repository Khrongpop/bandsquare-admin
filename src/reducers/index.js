import { combineReducers } from 'redux'
import counters from './counters'
import authentication from './authentication'
import users from './users'

export default combineReducers({
  counters,
  authentication,
  users
})