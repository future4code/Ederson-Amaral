import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


const Router = ({setRightButtonText}) => {
    return (       
            <Switch>
                <Route exact path='/'>
                    <LoginPage setRightButtonText={setRightButtonText} />
                </Route>
                <Route exact path='/register'>
                    <RegisterPage setRightButtonText={setRightButtonText}/>
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
    )
}

export default Router