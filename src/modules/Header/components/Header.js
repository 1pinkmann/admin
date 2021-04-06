import {React} from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ALBUMS_URI, USERS_URI, DASHBOARD_URI } from './../../../services/constants';

export default function Header () {

    return (
        <header className="header">
            <Link to={DASHBOARD_URI} className="header__link">Dashboard</Link>
            <Link to={USERS_URI} className="header__link">Users</Link>
            <Link to={ALBUMS_URI} className="header__link">Albums</Link>
        </header>
    );
}