export const START_SEARCH = 'start.search'
export const END_SEARCH = 'end.search'

export const startSearch = () => ({
  type: START_SEARCH
})

export const endSearch = userList => ({
  type: END_SEARCH,
  userList
})

export const handleError = response => {
  if(!response.ok){
    throw Error(response.status + ' ' + response.statusText)
  }
  return response
}
