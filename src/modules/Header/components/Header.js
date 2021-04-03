import {React} from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header () {

    return (
        <header className="header">
            <Link to="/dashboard" className="header__link">Dashboard</Link>
            <Link to="/users" className="header__link">Users</Link>
            <Link to="/albums" className="header__link">Albums</Link>
        </header>
    );
}