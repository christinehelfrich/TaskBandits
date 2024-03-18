import React from 'react'
import {useSelector} from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

const IsWorkerGuardedRoute = ({ children }) => {
    const user = useSelector((state) => {
        return state.user.user
    });
    let location = useLocation();

    if(!user.user.isSuperUser && !user.user.isWorkerProfileType) {
        return <Navigate to="/" state={{ from: location}} replace/>
    }
 return children

};


export default IsWorkerGuardedRoute
