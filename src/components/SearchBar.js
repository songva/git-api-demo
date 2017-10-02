import React from 'react'
import PropTypes from 'prop-types'

import UserList from './UserList'
import Spinner from './Spinner'

const SearchBar = ({searchUser, username, userList, isSearching}) => (
  <div id='search-bar'>
    <input value={username} onChange={event => {searchUser(event.target.value)}} placeholder='search'/>
    <Spinner isSearching={isSearching}/>
  </div>
)

SearchBar.propTypes = {
  searchUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  userList: PropTypes.array,
  isSearching: PropTypes.bool.isRequired
}

export default SearchBar
