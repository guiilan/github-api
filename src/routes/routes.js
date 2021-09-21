import _default from 'atob';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/page-home'
import ReposPage from '../pages/page-repos'
import StarredPage from '../pages/page-starred'

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route exact path="/repos">
                <ReposPage></ReposPage>
            </Route>
            <Route exact path="/starred">
                <StarredPage></StarredPage>
            </Route>
        </Switch>
    )
}