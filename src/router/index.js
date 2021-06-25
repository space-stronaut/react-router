import React,{Fragment} from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Show from '../views/Show'
import Index from '../views/Index'

function Router(){
    return (
        <Fragment>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/show">
                    <Show />
                </Route>
                <Route exact path="/index/:id">
                    <Index />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default Router