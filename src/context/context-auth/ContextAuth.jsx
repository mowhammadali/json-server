import React, { useState } from 'react';
export const ContextAuthProvider = React.createContext();

const ContextAuth = ({children}) => {
    const [authenticated , setAuthenticated] = useState(false);

    return (
        <ContextAuthProvider.Provider value={{authenticated , setAuthenticated}}>
            {children}
        </ContextAuthProvider.Provider>
    )
}

export default ContextAuth;