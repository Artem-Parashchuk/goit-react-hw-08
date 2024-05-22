import { useSelector } from "react-redux"
import { selectUserLoading } from "../redux/auth/slice"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const isLoading = useSelector(selectUserLoading)
    return isLoading ? children : <Navigate to='/login'/>
}
