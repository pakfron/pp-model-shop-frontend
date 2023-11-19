import { createContext, useContext, useState } from "react";
import axios from "../config/axios";
import { useEffect } from "react";
import { addAccessToken, getAccessToken } from "../utilis/local-storage";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  
  const [authUser, setAuthUser] = useState(null);
  const [accessToken, setAccessToken] = useState();
  const [haveAccessToken, setHaveAccessToken] = useState(
    null || getAccessToken()
  );
  const [regInput, setRegInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState();
  const [errorRegister, setErrorRegister] = useState();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState();
  const [editAddress,setEditAddress]=useState()



useEffect(()=>{

  getAddress()
  console.log('first')
},[])

const addAddress=(input)=>{
  axios.post('/auth/addaddress',input).then((res)=>{

    console.log(res.data.addAddress)
    setAddress(res.data.addAddress)
    setEditAddress(res.data.addAddress)
  }).catch((error)=>(console.log(error)))
}

const addressEdit=(input)=>{
  axios.patch('auth/editaddress',input).then((res)=>
    {console.log(res.data.newAddress)
    setAddress(res.data.newAddress)
    setEditAddress(res.data.newAddress)
  }
  ).catch(error=>{console.log(error)})
}


  const getAddress = () => {
    axios
      .get("/auth/getaddress")
      .then((res) => {
       
        setAddress(res.data.address);
        setEditAddress(res.data.address)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("auth/me")
        .then((res) => {
          setLoading(true);
          setAuthUser(res.data.user);
        })
        .catch((err) => console(err))
        .finally(() => {
          setLoading(true);
        });
    } else {
      setLoading(true);
    }
  }, []);

  const register = async (input) => {
    const res = await axios.post("/auth/register", input);
    setAuthUser(res.data.user);
    addAccessToken(res.data.accessToken);
    setLoading(true);
    if (getAccessToken()) {
      window.location.href = "/";
    }
    setLoading(false);
  };

  const login = async (input) => {
    const res = await axios.post("/auth/login", input);
    setAuthUser(res.data.user);
    addAccessToken(res.data.accessToken);
   
    if (getAccessToken()) {
      
      window.location.href= "/"
      }
      
    
  };

  return (
    <AuthContext.Provider
      value={{
        error,
        setError,
        regInput,
        setRegInput,
        authUser,
        setAuthUser,
        login,
        accessToken,
        setAccessToken,
        register,
        errorRegister,
        setErrorRegister,
        loading,
        setLoading,
        haveAccessToken,
        setHaveAccessToken,
        getAddress,
        address,
        setAddress,
        editAddress,
        setEditAddress,
        addressEdit,
        addAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
