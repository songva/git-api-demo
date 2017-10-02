import React from 'react'


const UserDetail = ({user}) => (
  <section>
    <div id='avatar' style={{backgroundImage: 'url(' + user.avatar_url + ')'}}></div>
    <h1>{user.login}</h1>
  </section>
)


export default UserDetail
