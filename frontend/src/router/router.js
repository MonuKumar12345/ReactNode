import { React, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './../register/register';
import Login from './../login/login';

class Routers extends Component{
    render(){
        return(
            <Router>
              <Switch>
                <Route path="/register">
                  <Register />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
          </Router>
        )
    }
}

export default Routers;