import {createContext} from 'react';
import { useUsers } from '../hooks/useUsers';

export const userContext = createContext(null);

export default function UserProvider({children}) {

    const user = useUsers([]);

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );
}