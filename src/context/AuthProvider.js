import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


// step 1:create context
export const AuthContext = createContext(); 


// context component AuthProvider which takes all the project from app.js
// as a props children and set it into the <AuthContext.Provider> because 
// it is the area of using context API.


const AuthProvider = (props) => {


    const {children} = props ; 
    const allContexts = useFirebase() ; 

    return (
        // step 2: create Provider under context  
        <AuthContext.Provider value = {allContexts}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;