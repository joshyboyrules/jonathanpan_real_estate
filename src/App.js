import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import { Provider } from 'react-redux'

import store from './redux/store'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands)

import './app.css'

import Header from './components/Header'
import Footer from './components/Footer'

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header/>
        {/*<nav>*/}
        {/*<Link to="/">Home</Link>*/}
        {/*<Link to="/about">About</Link>*/}
        {/*<Link to="/blog">Blog</Link>*/}
        {/*</nav>*/}
        <div className="content">
          <Routes/>
        </div>
        <Footer/>
      </div>
    </Router>
  </Provider>
)

export default hot(module)(App)
