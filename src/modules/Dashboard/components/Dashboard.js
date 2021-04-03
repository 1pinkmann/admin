import {React} from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';

export default function Dashboard () {

    return (
        <div className="dashboard">
            <Link to="/users" className="dashboard__link">Users</Link>
            <Link to="/albums" className="dashboard__link">Albums</Link>
        </div>
    );
}