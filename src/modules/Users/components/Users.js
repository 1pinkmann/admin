import { React, useContext } from 'react';
import './users.scss';
import User from './User';
import List from './../../../common/List';
import { userContext } from './../../../contexts/userContext';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Users() {

    const { url } = useRouteMatch();

    const { users } = useContext(userContext);

    return (
        <>
            <List className='users' array={users} Component={User} />
            <Link to={url + '/add'} className="button">Добавить</Link>
        </>
    )
}