import { createContext, useContext, useState } from "react";
import axios from "../config/axios";
import { useEffect } from "react";
import { addAccessToken, getAccessToken } from "../utilis/local-storage";

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

  // useEffect(()=>{console.log(authUser)},[authUser])

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
    setLoading(true)
    if (getAccessToken()) {
      window.location.href = "/";
    }
    setLoading(false)
  };

  const login = async (input) => {
    const res = await axios.post("/auth/login", input);
    setAuthUser(res.data.user);
    addAccessToken(res.data.accessToken);

    if (getAccessToken()) {
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
        setErrorRegister,
        loading,
        setLoading,
        haveAccessToken,
        setHaveAccessToken,
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
