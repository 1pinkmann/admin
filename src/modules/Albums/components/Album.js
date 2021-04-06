import {React} from 'react';

export default function Album ({item}) {
    
    return (
        <li className="albums__item">{item.title}</li>
    );
}