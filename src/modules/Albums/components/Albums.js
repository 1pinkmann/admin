import {React} from 'react';
import './albums.scss';
import { ALBUMS_URI } from '../../../services/constants';
import { useDashboard } from '../../../hooks/useDashboard';
import Album from './Album';
import List from './../../../common/List';

export default function Albums () {

    const {data: albums} = useDashboard([], ALBUMS_URI);

    return <List className='albums' array={albums} Component={Album} />
}