import {dashboardApi, usersApi} from "./api";

export function getDashboard(URI) {
    return dashboardApi.get(URI);
}

export function getUsers() {
    return usersApi.get();
}

export function remove(id) {
    return usersApi.delete(id);
}

export function post(newContact) {
    return usersApi.post('', newContact);
}

export function put(contact, id) {
    return usersApi.put(id, contact);
}