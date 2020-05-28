import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Blog from './components/Blog'
import Article from './components/Article'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div id="center-stripe">
            <Route exact path="/"/>
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={Article} />
        </div>
    </BrowserRouter>
  );
}

export default App;
