import {createContext, useState, useContext} from 'react';

export const UserContext = createContext(null);

export function UserContextProvider({children}) {
    const [firstName, setFirstName] = useState('');
    return (
        <UserContext.Provider value={{firstName, setFirstName}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(
            'userUserContext must be used within a UserContextProvider'
        );
    }
    const {firstName, setFirstName} = context;
    return {firstName, setFirstName};
}
