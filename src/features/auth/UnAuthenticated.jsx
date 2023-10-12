import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"


export default function UnAuthenticated({children}) {
    const {authUser} =useAuth()
    console.log(authUser)
    if(!!authUser===false){

        return <Navigate to="/login"/>
    }
  return children
}
