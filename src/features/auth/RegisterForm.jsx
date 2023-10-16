// import UseAuth from "../../hooks/UseAuth";
import { useState } from "react";
import FormLogRegButton from "./FormLogRegButton";
import InputLoginPage from "./InputLoginPage";
// import axios from "../../config/axios";
import WarningErrorText from "./WarningErrorText";
import { useAuth } from "../../context/AuthContext";
import { registerSchema } from "../../validate/validate";
import { useEffect } from "react";
import Loading from "../../components/Loading";

export default function RegisterForm() {
  const [regInput, setRegInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const { register, errorRegister, setErrorRegister, loading } =
    useAuth();

  useEffect(() => {
    setErrorRegister({});
  }, []);

  const handleChangeRegInput = (event) => {
    setRegInput({ ...regInput, [event.target.name]: event.target.value });
  };

  const regValueValid = (input) => {
    const { error } = registerSchema.validate(input, { abortEarly: false });
    if (error) {
      console.dir(error);
      const resultError = error.details.reduce((acc, item) => {
        acc[item.path[0]] = item.message;

        return acc;
      }, {});
      const specialChar = `/^[a-zA-Z0-9]{3,20}$/`;
      const confirmPassword = `[ref:password]`;
      console.log(resultError.username?.includes(specialChar));
      if (resultError.username?.includes(specialChar)) {
        resultError.username = "username can not use special character";
      }
      if (resultError.password?.includes(specialChar)) {
        resultError.password = "password can not use special character";
      }
      if (resultError.confirmPassword?.includes(confirmPassword)) {
        resultError.confirmPassword = "confirmPassword is not same password";
      }
      return resultError;
    }
  };

  const handleSumbitRegFrom = (event) => {
    event.preventDefault();
    const validError = regValueValid(regInput);
    if (validError) {
      return setErrorRegister(validError);
    }
    setErrorRegister({});
    register(regInput).catch((error) => {
      setErrorRegister(error.response.data);
    });
  };

  if (!loading) {
    return <Loading />;
  }

  return (
    <>
      <form
        className="flex flex-col bg-white w-[468px] h-[605px] border rounded-lg border-none"
        onSubmit={handleSumbitRegFrom}
      >
        <span className="text-pp-text-font block py-3 px-3">
          Create an Account
        </span>
        <hr className="pb-3" />
        <div className="flex flex-col px-4 gap-3">
          <label htmlFor="username">Username</label>
          <InputLoginPage
            value={regInput.username}
            onChange={handleChangeRegInput}
            name={"username"}
            placeholder={"Username"}
          />
          <div className="text-red-600 h-1 flex items-center">
            {errorRegister && (
              <WarningErrorText message={errorRegister?.username} />
            )}
          </div>
          <label htmlFor="email">email</label>
          <InputLoginPage
            value={regInput.email}
            onChange={handleChangeRegInput}
            name={"email"}
            placeholder={"Email"}
          />
          <div className="text-red-600 h-1 flex items-center">
            {errorRegister && (
              <WarningErrorText message={errorRegister?.email} />
            )}
          </div>
          <label htmlFor="password">password</label>
          <InputLoginPage
            value={regInput.password}
            onChange={handleChangeRegInput}
            name={"password"}
            placeholder={"Password"}
          />
          <div className="text-red-600 h-1 flex items-center">
            {errorRegister && (
              <WarningErrorText message={errorRegister?.password} />
            )}
          </div>
          <label htmlFor="confirmPassword">confirmPassword</label>
          <InputLoginPage
            value={regInput.confirmPassword}
            onChange={handleChangeRegInput}
            name={"confirmPassword"}
            placeholder={"Confirm Password"}
          />
          <div className="text-red-600 h-1 flex items-center">
            {errorRegister && (
              <WarningErrorText message={errorRegister?.confirmPassword} />
            )}
          </div>
        </div>

        <FormLogRegButton
          className={
            "w-full h-[70px] border rounded-xl text-base text-white font-bold bg-pp-logreg-button"
          }
        >
          Register
        </FormLogRegButton>
      </form>
    </>
  );
}
