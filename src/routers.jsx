import React from 'react'

import { Route, Switch ,Redirect } from 'react-router-dom'

// import { Home } from './pages/home.js'
import  User  from './pages/user'
import  Dashboard  from './pages/dashboard'
import  Login  from './pages/login'
import  Work  from './pages/work'

const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>404</h1>



export const Router = () => (
    <Switch>
        <GuesstRoute exact path="/" component={Login}/>
        <AuthRoute path="/dashboard" component={Dashboard}   />
        <AuthRoute path="/users" component={User}   />
        <AuthRoute path="/work" component={Work}  />
        <AuthRoute path="/posts" component={Post}  />
        <AuthRoute path="/projects" component={Project}  />
  
        <Route component={NotFoundPage}  />
    </Switch>
)

export const Auth =  {
  isLogin : localStorage.getItem("adminBSuser") ? true : false
}


const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isLogin === true ? <Component {...props} /> : <Redirect to='/' />
  )} />
)

const GuesstRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isLogin !== true ? <Component {...props} /> : <Redirect to='/dashboard' />
  )} />
)