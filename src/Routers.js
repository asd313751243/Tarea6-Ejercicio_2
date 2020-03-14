import React, { Component } from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import App from './App'
import History from './History';
import Nav from './Components/Nav'

class Routers extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path="/calculator" component={App}></Route>
                    <Route exact path="/history" component={History}></Route>
                </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default Routers;