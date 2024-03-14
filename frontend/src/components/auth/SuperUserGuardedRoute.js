import React from 'react'
import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

const SuperUserGuardedRoute = ({ children }) => {
    const user = useSelector((state) => {
        return state.user.user
    });
    let location = useLocation();
    console.log('user', user)

    if(!user.user.isSuperUser) {
        return <Navigate to="/" state={{ from: location}} replace/>
    }
 return children

};


export default SuperUserGuardedRoute
