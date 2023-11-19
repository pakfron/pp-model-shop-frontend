import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function AuthenticatedAdmin({children}) {
const {authUser}=useAuth()
    if(authUser?.role!=="admin"){
       return <Navigate to="/"/>
    }
    return children
}        
 