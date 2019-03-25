import React from 'react'

import { Route, Switch } from 'react-router-dom'

// import { Home } from './pages/home.js'
import  User  from './pages/user'
import  Dashboard  from './pages/dashboard'
import  Login  from './pages/login'
import  Work  from './pages/work'


const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>404</h1>

const IsLogin = localStorage.getItem("user") ? true : false


const requireAuth = (nextState, replace) => {
    if (!IsLogin) {
      replace({
        pathname: '/'
      })
    }
}

// const isAuth = (nextState, replace) => {
//     if (IsLogin) {
//       replace({
//         pathname: '/users'
//       })
//     }
// }

export const Router = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Dashboard}   />
        <Route path="/users" component={User}   />
        <Route path="/work" component={Work}  />
        <Route path="/posts" component={Post}  />
        <Route path="/projects" component={Project}  />
  
        <Route component={NotFoundPage} onEnter={requireAuth} />
    </Switch>
)