import { React} from 'react';
import './users.scss';
import User from './User';
import List from './../../../common/List';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

function Users({users, dispatch}) {

    const {url} = useRouteMatch();

    return (
        <>
            <List className='users' array={users} Component={User} dispatch={dispatch}/>
            <Link to={url + 'add'} className="button">Добавить</Link>
        </>
    )
}

function mapStateToProps(state) {
    return { users: state.users }
}

export default connect(mapStateToProps)(Users);

