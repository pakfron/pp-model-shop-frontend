import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

export default function Authenticated({children}) {
const {haveAccessToken}=useAuth()
    if(haveAccessToken){
       return <Navigate to="/"/>
    }
    return children
}        
