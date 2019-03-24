import React from 'react'

import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/home.js'
import { User } from './pages/user'
import  Login  from './pages/login'

const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>
const NotFoundPage = () => <h1>404</h1>

export const Router = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/posts" component={Post} />
        <Route path="/projects" component={Project} />
        <Route path="/users" component={User} />
        <Route component={NotFoundPage} />
    </Switch>
)