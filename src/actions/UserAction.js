import fetch from 'isomorphic-fetch'
import Promise from 'es6-promise'

import { startSearch, endSearch, handleError } from './BaseAction'

export const START_TYPE = 'start.type'

Promise.polyfill()

const startType = username => ({
  type: START_TYPE,
  username
})

export const searchUser = username => (dispatch, getState) => {
  dispatch(startType(username))
  setTimeout(() => {
    const { isTyping } = getState();
    if(isTyping + 290 < Date.now()){
      dispatch(instantSearchUser(username))
    }
  }, 300)
}

export const instantSearchUser = username => dispatch => {
  if(!username){
    return dispatch(endSearch({}))
  }
  dispatch(startSearch(username))
  return fetch('https://api.github.com/search/users?q=' + username + '+in:login')
  .then(handleError)
  .then(response => response.json())
  .then(json => {
    dispatch(endSearch(json))
  })
  .catch(error => {
    dispatch(endSearch({}))
    console.log(error)
  })
}
