import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const generateResult = repoList => {
  if(!repoList){
    return
  }else if(repoList.length === 0){
    return <li key='0'>We cannot find any matching result.</li>
  }else{
    let repoLi = repoList.map(repo =>
      <li key={repo.name}>
        <article>
          <h1>{repo.name}</h1>
          <p id='description'>{repo.description}</p>
        </article>
      </li>
    )
    if(repoLi.length % 2 === 1){
      repoLi.push(<li key={-9999} id='dummy-item'></li>)
    }
    return repoLi
  }
}

const RepoList = ({ repoList }) => {
  return (
    <div id='repo-list'>
      <ul>
        <li></li>
        {generateResult(repoList)}
        <li></li>
      </ul>
      <div id='scrollbar-overlay'></div>
    </div>
  )
}

export default RepoList
