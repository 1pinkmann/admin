import { getUsers, post, put, remove } from './../../services/service';

export const REMOVE_USER = 'REMOVE_USER';
export const removeUser = (payload) => ({
    type: REMOVE_USER,
    payload,
});

export const ADD_USER = 'ADD_USER';
export const addUser = (payload) => ({
    type: ADD_USER,
    payload,
});

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload,
});

export const GET_USERS = 'GET_USERS';
export const getUsersAction = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

export const EDIT_USER = 'EDIT_USER';
export const editUser = (payload) => {
    return {
        type: EDIT_USER,
        payload
    }
}

export const fetchUsers = () => (dispatch) => {
    getUsers().then(({ data }) => {
        dispatch(getUsersAction(data));
    });
}

export const handleSaveUser = (user) => (dispatch) => {

    let id = user.id;
    if (id) {
        put(user, id)
            .then(() => dispatch(updateUser(user)));
    } else {
        post(user)
            .then(({data}) => dispatch(addUser(data)))
    }
    
    put(user, id).then(() => dispatch(updateUser(id)));
}

export const handleRemoveUser = (user) => (dispatch) => {
    let id = user.id;
    
    remove(id).then(() => dispatch(removeUser(id)));
}