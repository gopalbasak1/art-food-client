/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    const location = useLocation();

    if(loading) return <Spinner/>

    if(user) return children


    return <Navigate to='/login' state={location.pathname} replace={true} />
};

export default PrivateRoute;