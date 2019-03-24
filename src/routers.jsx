import React from 'react'

import { Route, Switch } from 'react-router-dom'

// import { Home } from './pages/home.js'
import { User } from './pages/user'
import  Login  from './pages/login'

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

const isAuth = (nextState, replace) => {
    if (IsLogin) {
      replace({
        pathname: '/users'
      })
    }
}

export const Router = () => (
    <Switch>
        <Route exact path="/" component={Login} onEnter={isAuth}/>
        <Route path="/about" component={About} onEnter={requireAuth}  />
        <Route path="/posts" component={Post} onEnter={requireAuth}  />
        <Route path="/projects" component={Project} onEnter={requireAuth} />
        <Route path="/users" component={User} onEnter={requireAuth}  />
        <Route component={NotFoundPage} onEnter={requireAuth} />
    </Switch>
)