import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Redirect, Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './features/Home';
import './index.css';

const customHistory = createBrowserHistory();
const Root = () => {
 return (
  <Router history={customHistory}>
   <Switch>
    <Route path="/home" component={Home} />
    <Redirect from="/" to="/home" />
   </Switch>
  </Router>
 )
}
ReactDOM.render(<Root />, document.getElementById('root'));