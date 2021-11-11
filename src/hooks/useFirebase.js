import { useEffect, useState} from 'react'
import initializeAuthentication from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut} from "firebase/auth";


// For Firebase connection
initializeAuthentication() ;


// custom hook useFirebase() function starts here 
const useFirebase = () =>{

// declaring state    
const [user , setUser] = useState({}) ; 
const [isLoading , setIsLoading] = useState(true) ; 


// For google Authentication
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

// For Google Sign In
const signInUsingGoogle = () =>{
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider) ;
    
}


// useEffect is used because firbase does not get user info from normal user state
// which is changed by setUser in signInUsingGoogle() section
// thats why logout button does not show 
// when a user login (this logout condition is shown in header section)
useEffect( () =>{
    // onAuthStateChanged  is used to synchronize the user's state (logged in state or logged out state) 
    // in different tabs. if a user logg in one tab then he will be logged in all his open tab.
    // or if a user logg out from one tab then he will be logged out from all his open tab.
    onAuthStateChanged(auth, (user) =>{
        if(user){
            //console.log( 'inside state change', user)
            setUser(user) 
        }
            else {
                setUser({})
            }
        
            setIsLoading(false);
        
        }
     )
}, [])

// For logout
const logOut = () =>{
    signOut(auth)
    .then( ()=> setUser({}) )
    .finally( ()=>setIsLoading(false))
}


// custom hook useFirebase() function return values (function , state)

    return {user , isLoading , signInUsingGoogle , logOut}
}

// Anyone can use custom hook useFirebase() function from anywhere
export default useFirebase; 