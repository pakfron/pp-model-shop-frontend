import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"


export default function UnAuthenticated({children}) {
    const {haveAccessToken} =useAuth()
    console.log(haveAccessToken)
    if(!!haveAccessToken===false){

        return <Navigate to="/login"/>
    }
  return children
}
