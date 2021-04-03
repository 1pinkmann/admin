import {React} from 'react';

export default function Album ({album}) {
    
    return (
        <li className="albums__item">{album.title}</li>
    );
}