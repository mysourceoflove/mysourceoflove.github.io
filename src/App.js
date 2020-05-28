import React, { Component, Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Blog from './components/Blog'
import Article from './components/Article'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }
  render () {
    return (
      <Fragment>
            {/* <Route exact path='/' render={() => (
              <Home />
            )} /> */}
            <Route exact path='/blog' render={() => (
              <Blog />
            )} />
            <Route exact path='/blog/:id' render={({ match }) => (
              <Article match={ match }/>
            )} />
      </Fragment>
    )
  }
}

export default App;
