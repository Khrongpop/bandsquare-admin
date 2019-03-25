import { combineReducers } from 'redux'
import authentication from './authentication'
import users from './users'
import works from './works'

export default combineReducers({
  authentication,
  users,
  works
})