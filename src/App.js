import React from 'react';
import Dashboard from './modules/Dashboard/components/Dashboard';
import Header from './modules/Header/components/Header';
import Users from './modules/Users/components/Users';
import Albums from './modules/Albums/components/Albums';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ALBUMS_URI, DASHBOARD_URI, USERS_URI } from './services/constants';
import Form from './modules/Form/components/Form';
import UserProvider from './contexts/userContext';

export default function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path={DASHBOARD_URI} component={Dashboard} />
                <Route path={ALBUMS_URI} component={Albums} />
                <UserProvider>
                    <Route path={USERS_URI} exact component={Users} />
                    <Route path={USERS_URI + '/:id'} component={Form} />
                </UserProvider>
            </Switch>
        </Router>
    );
}