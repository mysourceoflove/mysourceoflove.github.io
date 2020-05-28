import React, { Component, Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Home from './components/Home'
import Blog from './components/Blog'
import Article from './components/Article'

class App extends Component {
  constructor () {
    super()

    this.state = {}
  }
  render () {
    return (
      <Fragment>
          <main>
            <Route exact path='/' render={() => (
              <Home />
            )} />
            <Route exact path='/blog' render={() => (
              <Blog />
            )} />
            <Route exact path='/blog/:id' render={({ match }) => (
              <Article match={ match }/>
            )} />
          </main>
      </Fragment>
    )
  }
}

export default App;
