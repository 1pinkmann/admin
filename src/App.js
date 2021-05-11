import React from 'react';
import Users from './modules/Users/components/Users';

import { Route, Switch } from 'react-router-dom';
import Form from './modules/Form/components/Form';
import store from './store/store';
import { fetchUsers } from './store/users/actions';
import { Provider } from 'react-redux';

store.dispatch(fetchUsers());

export default function App() {

    return (
        <Switch>
            <Provider store={store}>
                <Route path='/' exact >
                    <Users />
                </Route>
                <Route path='/:id' >
                    <Form />
                </Route>
            </Provider>
        </Switch>
    );
}