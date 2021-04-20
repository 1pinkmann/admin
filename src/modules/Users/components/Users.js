import { React, useContext } from 'react';
import './users.scss';
import User from './User';
import List from './../../../common/List';
import { userContext } from './../../../contexts/userContext';
import { Link } from 'react-router-dom';
import { FORM_URI } from '../../../services/constants';

export default function Users() {

    const { users } = useContext(userContext);

    return (
        <>
            <List className='users' array={users} Component={User} />
            <Link to={FORM_URI} className="button">Добавить</Link>
        </>
    )
}