import {React} from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';
import { USERS_URI, ALBUMS_URI } from '../../../services/constants';


export default function Dashboard () {

    return (
        <div className="dashboard">
            <Link to={USERS_URI} className="dashboard__link">Users</Link>
            <Link to={ALBUMS_URI} className="dashboard__link">Albums</Link>
        </div>
    );
}