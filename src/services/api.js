import axios from 'axios';
import { USERS_URL } from './constants';

export const usersApi  = axios.create({
    baseURL: USERS_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})