import {React} from 'react';

export default function User ({item}) {
    
    return (
        <li className="users__item">
            <span className="users__item-cell">{item.name}</span>
            <span className="users__item-cell">{item.phone}</span>
            <a href={item.website} className="users__item-cell">{item.website}</a>
        </li>
    );
}