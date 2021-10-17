import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch,Route} from 'react-router'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import About from '../pages/About'

export default function Layout() {
    return (
         
<Router>

<Switch>

<Route exact path="/">
       <Home />
     </Route>
     <Route path="/about">
       <About/>
     </Route>
     <Route path="/contact">
       <Contact/>
     
     </Route>
  </Switch>
 
</Router>
    )
}
