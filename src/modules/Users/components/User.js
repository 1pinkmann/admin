import {React} from 'react';

export default function User ({user}) {
    

    return (
        <li className="users__item">
            <span className="users__item-cell">{user.name}</span>
            <span className="users__item-cell">{user.phone}</span>
            <a href={user.website} className="users__item-cell">{user.website}</a>
        </li>
    );
}