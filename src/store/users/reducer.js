import { GET_USERS, UPDATE_USER, REMOVE_USER, EDIT_USER, ADD_USER } from './actions';

const initialState = {
    users: [],
    user: null
};

export default function reducer(state = initialState, { type, payload }) {
   
    switch (type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload],
            };

        case GET_USERS:
            return {
                ...state,
                users: payload
            };

        case UPDATE_USER:
            return {
                users: state.users.map((user) =>
                    user.id !== payload.id ? user : payload),
            };

        case EDIT_USER:   
            return { ...state, user: payload }

        case REMOVE_USER:
            return {
                ...state,
                items: state.users.filter((user) => user.id !== payload),
            }

        default:
            return state;
    };
}