import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import configStore from './store/configStore'
import SearchPage from './containers/SearchPage'
import DetailPage from './containers/DetailPage'
import './style/global.scss'

// require('viewport-units-buggyfill').init();
// import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
// viewportUnitsBuggyfill.init()

const store = configStore()

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={SearchPage} />
            <Route path='/:username' component={DetailPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

const root = document.querySelector('#root')

ReactDOM.render(<App />, root)
