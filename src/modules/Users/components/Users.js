import {React} from 'react';
import './users.scss';
import { useData } from './../../../hooks/useData';
import {USERS_URI} from '../../../services/constants';
import User from './User';
import List from './../../../common/List';

export default function Users () {

    const {data: users} = useData([], USERS_URI);

    return <List className='users' array={users} Component={User} />
}