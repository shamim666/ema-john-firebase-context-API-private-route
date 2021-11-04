import { SignInMethod } from "@firebase/auth";
import { useContext } from "react";
import useFirebase from "../hooks/useFirebase";

const firebaseConfig = {
    apiKey: "AIzaSyAhYfkoGxVN8ORlAB0xqrIdmXNzcM2Cvtg",
    authDomain: "ema-john-authentication-cdca5.firebaseapp.com",
    projectId: "ema-john-authentication-cdca5",
    storageBucket: "ema-john-authentication-cdca5.appspot.com",
    messagingSenderId: "795096599461",
    appId: "1:795096599461:web:82e9b06f621b85f670f64c"
  };

  export default firebaseConfig ; 

  /* Steps of configuring firebase , custom hook useFirebase() function and context API 

  step 1 :  Firebase Authentication 
  
  1. initial setup ( firebase : create project)
  2. create web app
  3. get configuration
  4. initialize firebase 
  5. Enable auth method 

  step 2 :  Setup Component

  1. create Login Component 
  2. create Register Component 
  3. create Login and Register route in app.js   


 step 3 :  Setup Auth System

 1. declare user and error state 
 2. setup sign in  which is signInUsingGoogle
 3. setup sign out  which is logOut method 
 4. special observer which is useEffect()
 5. return necessary methods and states from useFirebase()

 step 4 :  Create Auth Context hook (useAuth)

 1. create a auth context 
 2. create context provider 
 3. set context provider value
 4. use Auth Provider 
 5. create useAuth hook 

step 5 :  Create Private Route

1. create private route
2. set private route

step 6 : Redirect after Login

1. after login redirect user to their desired destination
  (if user not logged in but click proceed to shipping button .
  it will take user first login page and after login user
  will automatically go to his desired shipping page where he
  wanted to go. )

  but if user looged in then he can directly go to shipping page.

 */