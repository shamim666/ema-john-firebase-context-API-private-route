import React from 'react';
import {Spinner} from 'react-bootstrap'
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


// here destructuring of object is used.
// normally props is a object . Like bellow example..
// const props = {name:'rana' , age: 20 , children: 'abc'}
// if i want to destructure it like this 
// const {children , ...rest } = props
// then the output will be
// abc and {name:'rana' , age: 20}

// PrivateRoute receives <PlaceOrder></PlaceOrder> as a props
// from component function calling in app.js
// here children = <PlaceOrder></PlaceOrder>
<<<<<<< HEAD
// and ...rest = other props of PrivateRoute is sent to Route through ...rest  
=======
// and ...rest = other props of PrivateRoute what goes to Route
>>>>>>> 0522c315ba19115a06edbf599949ac69e2b40393
const PrivateRoute = ({children , ...rest}) => {

    // using context API useAuth()
    const {user , isLoading } = useAuth();
    if(isLoading) {
        return  <Spinner animation ="border" variant="danger" />
    }
    return (
        <Route
        {...rest}

        // if user logged in  then user.email is true and then it wiil take to you
        // placeOrder page  but if you dont logged in it will take to
        // you log in page. here location is a fact . it stores the value from where you come from. 
        // that means you want to go to placeOrder page but it takes you to log in page  if 
        // you are not logged in. so the value of location will be placeOrder and it will be
        // stored in state:from  . PLease to see more in log in page . 

        render={({location})=> user.email? children:
                <Redirect to ={{pathname:"/login" ,
                    state:{from:location}}} ></Redirect>}
        ></Route>
    );
};

export default PrivateRoute;
