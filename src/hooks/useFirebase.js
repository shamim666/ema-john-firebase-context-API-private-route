import { useEffect, useState} from 'react'
import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut} from "firebase/auth";


// For Firebase connection
initializeAuthentication() ;


// custom hook useFirebase() function starts here 
const useFirebase = () =>{

// declaring state    
const [user , setUser] = useState({}) ; 


// For google Authentication
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// For Google Sign In
const signInUsingGoogle = () =>{
    return signInWithPopup(auth, googleProvider) ;
    
}


// useEffect is used because firbase does not get user info from normal user state
// which is changed by setUser in signInUsingGoogle() section
// thats why logout button does not show 
// when a user login (this logout condition is shown in header section)
useEffect( () =>{
    onAuthStateChanged(auth, (user) =>{
        if(user){
            //console.log( 'inside state change', user)
            setUser(user)
        }
    } )
}, [])

// For logout
const logOut = () =>{
    signOut(auth)
    .then( ()=>{
        setUser({});
    })
}


// custom hook useFirebase() function return values (function , state)

    return {user , signInUsingGoogle , logOut}
}

// Anyone can use custom hook useFirebase() function from anywhere
export default useFirebase; 