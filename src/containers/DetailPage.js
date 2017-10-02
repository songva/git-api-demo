import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { searchRepo } from '../actions/RepoAction'
import RepoList from '../components/RepoList'
import UserDetail from '../components/UserDetail'

class DetailPage extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.searchRepo(this.props.match.params.username);
  }

  render(){
    let user = undefined;
    (this.props.userList || []).forEach(entry => {
      if(entry.login === this.props.match.params.username){
        user = entry
      }
    })
    if(!user){
      return null
    }
    return (
      <div id='user-detail-page'>
        <UserDetail user={user} />
        <RepoList repoList={this.props.repoList} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userList: state.userList,
  repoList: state.repoList
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({searchRepo}, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailPage))
