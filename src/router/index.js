import React,{Fragment} from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

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
                </Switch>
        </Fragment>
    )
}

export default Router