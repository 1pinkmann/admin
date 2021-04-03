import {React} from 'react';
import './users.scss';
import { useData } from './../../../hooks/useData';
import {USERS_URI} from './../constants/usersConstants';
import User from './User';

export default function Users () {

    const {data: users} = useData([], USERS_URI);

    return (
        <ul className="users">
            {users.map(user => {

                return <User key={user.id} user={user} />;
            })}
        </ul>
    );
}