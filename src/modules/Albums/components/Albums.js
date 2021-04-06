import {React} from 'react';
import './albums.scss';
import { ALBUMS_URI } from '../../../services/constants';
import { useData } from '../../../hooks/useData';
import Album from './Album';

export default function Albums () {

    const {data: albums} = useData([], ALBUMS_URI);

    return (
        <ul className="albumns">
            {albums.map(album => {
                return <Album key={album.id} album={album} />
            })}
        </ul>
    );
}