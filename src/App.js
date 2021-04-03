import React from 'react';
import Dashboard from './modules/Dashboard/components/Dashboard';
import Header from './modules/Header/components/Header';
import Users from './modules/Users/components/Users';
import Albums from './modules/Albums/components/Albums';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export default function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/albums" component={Albums} />
                <Route path="/users" component={Users} />
            </Switch>
        </Router>
    );
}