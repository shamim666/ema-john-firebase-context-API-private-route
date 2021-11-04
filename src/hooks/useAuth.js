import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';


// custom hook useAuth() function starts here 
const useAuth = () => {

// custom hook useAuth() returns  useContext(AuthContext)   
   return useContext(AuthContext)
};

export default useAuth;