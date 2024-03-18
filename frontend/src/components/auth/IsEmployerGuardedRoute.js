import React from 'react'
import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

const IsEmployerGuardedRoute = ({ children }) => {
    const user = useSelector((state) => {
        return state.user.user
    });
    let location = useLocation();

    if(!user.user.isSuperUser && !user.user.isEmployerProfileType) {
        return <Navigate to="/" state={{ from: location}} replace/>
    }
 return children

};


export default IsEmployerGuardedRoute
