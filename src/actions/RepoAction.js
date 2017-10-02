import fetch from 'isomorphic-fetch'
import Promise from 'es6-promise'

import { endSearch, handleError } from './BaseAction'
import { instantSearchUser } from './UserAction'

export const START_SEARCH_REPO = 'start.search.repo'
export const END_SEARCH_REPO = 'end.search.repo'

Promise.polyfill()

const startSearchRepo = () => ({
  type: START_SEARCH_REPO
})

const endSearchRepo = repoList => ({
  type: END_SEARCH_REPO,
  repoList
})

const doSearchRepo = username => dispatch => {
  if(!username){
    return dispatch(endSearch({}))
  }
  dispatch(startSearchRepo())
  return fetch('https://api.github.com/users/' + username + '/repos?type=forks')
  .then(handleError)
  .then(response => response.json())
  .then(json => {
    dispatch(endSearchRepo(json))
  })
}


export const searchRepo = username => (dispatch, getState) => {
  const { userList } = getState()
  let user = undefined;
  (userList || []).forEach(entry => {
    if(entry.login === username){
      user = entry
    }
  })
  if(!user){
    dispatch(instantSearchUser(username))
  }
  dispatch(doSearchRepo(username))
}
