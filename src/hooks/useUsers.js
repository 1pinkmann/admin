import {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { USERS_URI } from '../services/constants';

import { put, getUsers, remove, post } from './../services/service';

export function useUsers(defaultValue) {

    let history = useHistory();

    const [users, setUsers] = useState(defaultValue);

    const [editingUser, setEditingUser] = useState(null);
    
    let handleRemove = (id) => {
        remove(id).then(() => {
            setUsers(users.filter((item) => item.id !== id))
        });
    };

    let handleSaveUser = (user) => {
        if (editingUser) {
            let id = user.id;
            put(user, id)
                .then(() => {
                    setUsers((users) => {
                        return users.map(item => item.id !== id ? item : user);
                    });
                    handleCloseForm();
                })
        } else {
            post(user)
                .then(({data}) => {
                    setUsers((users) => {
                        return [...users, data]
                    });
                    handleCloseForm();
                })
        }
    }

    let handleEditUser = (editingUser) => {
        setEditingUser(editingUser);
    }

    let handleCloseForm = () => {
        history.push(USERS_URI);
    }

    useEffect(() => {
        getUsers().then(({data}) => {
            setUsers(data);
        });
    }, [])

    return {
        users,
        editingUser,
        setEditingUser,
        handleRemove,
        handleSaveUser,
        handleEditUser,
        handleCloseForm
    }
}