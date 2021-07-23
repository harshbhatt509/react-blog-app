import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header'
import Home from './components/Main/Home/Home'
import Blog from './components/Main/Blog/Blog'

import './App.css'

export default function App() {

   return (
      <Router>
         <Route path='/' exact component={Header} />
         <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Blog' component={Blog} />
         </Switch>
      </Router>
   )
}
