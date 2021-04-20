import axios from 'axios';
import { DASHBOARD_URL, USERS_URL } from './constants';

export const dashboardApi  = axios.create({
    baseURL: DASHBOARD_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const usersApi  = axios.create({
    baseURL: USERS_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})