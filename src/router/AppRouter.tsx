import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import List from '../views/List';
import App from '../App';

export default class AppRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/list" component={List}></Route>
                </Switch>
            </HashRouter>
        )
    }
}