import {React} from 'react';

export default function User ({user}) {
    

    return (
        <li className="users__item">
            <span className="users__item-cell">{user.name}</span>
            <span className="users__item-cell">{user.phone}</span>
            <span className="users__item-cell">{user.website}</span>
        </li>
    );
}