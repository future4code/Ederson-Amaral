import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LoginPage />
                </Route>
                <Route exact path='/register'>
                    <RegisterPage />
                </Route>
                <Route exact path='/feed'>
                    <FeedPage />
                </Route> 
                <Route exact path='/post/:id'>
                    <PostPage />
                </Route>                               
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router