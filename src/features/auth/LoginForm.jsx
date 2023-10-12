import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import FormLogRegButton from "./FormLogRegButton";
import InputLoginPage from "./InputLoginPage";
import Joi from "joi";

import WarningErrorText from "./WarningErrorText";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { setError, error, login } = useAuth();
  const loginShcema = Joi.object({
    username: Joi.string()
      .trim()
      .pattern(/^[a-zA-Z0-9]{3,20}$/)
      .required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,20}$/)
      .trim()
      .required(),
  });

  const handleOnchange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    
  };

  const loginValid = (input) => {
      
      const { error } = loginShcema.validate(input, { abortEarly: false });
      if (error) {
        
        const resultError = error.details.reduce((acc, item) => {
          acc[item.path[0]] = item.message;

          return acc;
        }, {});
        const specialChar = `/^[a-zA-Z0-9]{3,20}$/`;
        if(resultError.username?.includes(specialChar)){
          resultError.username="username can not use special character"
        }
        if(resultError.password?.includes(specialChar)){
          resultError.password="password can not use special charcter"
        }
        return resultError;
      
    }
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const loginErr = loginValid(input);
    if (loginErr) {
   return  setError(loginErr);
    }
    setError({})
    
    login(input).catch((error) => {
      setError(error.response.data);
      console.log(error)  
    });
  };

  return (
    <form
      className="flex flex-col bg-white w-[468px] h-[605px] border rounded-lg border-none"
      onSubmit={handleSubmitLogin}
    >
      <span className="text-pp-text-font block py-3 px-3 text-b">Login</span>
      <hr className="pb-3" />
      <div className="flex flex-col px-4 gap-3">
        <label htmlFor="username">Username</label>
        <InputLoginPage
          onChange={handleOnchange}
          className={""}
          value={input.username}
          name={"username"}
          placeholder={"Username"}
        />
        <div className="text-red-600 h-1 flex items-center">
        {error && <WarningErrorText message={error?.username} />}
      
        </div>
        <label htmlFor="password">password</label>
        <InputLoginPage
          type={"password"}
          value={input.password}
          onChange={handleOnchange}
          className={""}
          name={"password"}
          placeholder={"Password"}
        />
        <div className="text-red-600 h-1 flex items-cente">
          {error && <WarningErrorText message={error?.password} />}
        </div>
          <div className="flex items-center justify-center">
          <FormLogRegButton className={"w-[270px] bg-pp-login-button h-[70px] border rounded-xl text-base text-white font-bold"}>
            Login
          </FormLogRegButton>

          </div>
          <div className="text-red-600 h-1 flex items-center justify-center text-[20px] font-bold mt-[20px]">
          {error?.message && <WarningErrorText message={error?.message} />}
        </div>
      </div>
    </form>
  );
}
