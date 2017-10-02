import { START_SEARCH, END_SEARCH } from '../actions/BaseAction'
import { START_TYPE } from '../actions/UserAction'
import { START_SEARCH_REPO, END_SEARCH_REPO } from '../actions/RepoAction'

const UserReducer = (state = {
  isSearching: false,
  isTyping: Date.now(),
  username: '',
  userList: undefined,
  repoList: undefined
}, action) => {
  switch(action.type){
    case START_TYPE:
      return {
        ...state,
        isTyping: Date.now(),
        userList: undefined,
        username: action.username
      }
    case START_SEARCH:
      return {
        ...state,
        isSearching: true
      }
    case END_SEARCH:
      return {
        ...state,
        isSearching: false,
        userList: action.userList.items
      }
    case START_SEARCH_REPO:
      return {
        ...state,
        isSearching: true,
        repoList: undefined
      }
    case END_SEARCH_REPO:
      return {
        ...state,
        isSearching: false,
        repoList: action.repoList
      }
    default:
      return state
  }
}

export default UserReducer
