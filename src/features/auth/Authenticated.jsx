import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function Authenticated({children}) {
const {authUser}=useAuth()
    if(authUser){
       return <Navigate to="/"/>
    }
    return children
}        
