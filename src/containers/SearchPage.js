import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import SearchBar from '../components/SearchBar'
import UserList from '../components/UserList'
import { searchUser } from '../actions/UserAction'

class SearchPage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id='search-page'>
        <SearchBar {...this.props} />
        <UserList userList={this.props.userList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.username,
  userList: state.userList,
  isSearching: state.isSearching
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({searchUser}, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage))
