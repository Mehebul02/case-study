
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({children}) => {
const {user , loading} = useAuth()
const location = useLocation()
if(loading) return <p></p>
if(user) return children
    return <Navigate to='/login' state={location.pathname} replace={true}></Navigate>;
};

export default PrivateRoutes;