import React, { Component } from 'react'
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import App from './App'
import History from './History';

class Routers extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                
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