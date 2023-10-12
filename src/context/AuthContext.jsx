import { createContext, useContext, useState } from "react";
import axios from "../config/axios";
import { useEffect } from "react";
import { addAccessToken, getAccessToken } from "../utilis/local-storage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null || getAccessToken());
  const [accessToken, setAccessToken] = useState();
  const [regInput, setRegInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [error, setError] = useState();
  const [errorRegister, setErrorRegister] = useState();

  // useEffect(()=>{console.log(authUser)},[authUser])

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("auth/me")
        .then((res) => {
          console.log(res.data.user)
          setAuthUser(res.data.user)})
        .catch((err) => console(err));
    }
    

  }, []);

  const register = async (input) => {
    const res = await axios.post("/auth/register", input);
    setAuthUser(res.data.user);
    addAccessToken(res.data.accessToken);
  };

  const login = async (input) => {
    const res = await axios.post("/auth/login", input);
    setAuthUser(res.data.user);
    addAccessToken(res.data.accessToken);

    if (accessToken) {
      window.location.href = "/";
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
        setErrorRegister
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
