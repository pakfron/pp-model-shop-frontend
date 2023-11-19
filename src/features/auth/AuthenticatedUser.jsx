import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function AuthenticatedUser({children}) {
const {authUser}=useAuth()
    if(authUser?.role!=="user"){
       return <Navigate to="/"/>
    }
    return children
}        
 