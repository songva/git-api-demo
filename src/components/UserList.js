import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const generateResult = userList => {
  if(!userList){
    return
  }else if(userList.length === 0){
    return (
      <li key='0'>
        <span id='empty-result'>We cannot find any matching result.</span>
      </li>
    )
  }else{
    return userList.map(user => (
      <li key={user.login}>
        <Link to={user.login}>
          <span style={{ backgroundImage: 'url("' + user.avatar_url + '")'}} />
          {user.login}
        </Link>
      </li>)
    )
  }
}

const UserList = ({ userList }) => {
  return (
    <div id='user-list'>
      <ul>
        {generateResult(userList)}
      </ul>
      <div id='scrollbar-overlay'></div>
    </div>
  )
}

export default UserList
