import { useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

export default function AccountProfileData({ profileInput }) {
  const { authUser } = useAuth();

  const checkData = () => {
    if (profileInput === "E-mail") {
      return authUser.email;
    }

    if (profileInput === "Password") {
      return "●●●●●●";
    }
  }

  const emailOrPassword = ()=>{
    if (profileInput === "E-mail") {
        return `/my-account/${authUser.id}/profile/e-mail`;
      }
  
      if (profileInput === "Password") {
        return `/my-account/${authUser.id}/profile/password`;
      }
    };
  

  return (
    <>
      <div className="flex flex-col pl-10 text-pp-text-font  w-[550px]">
        <div className="flex justify-between w-full">
          <div>{profileInput}</div>
          <div className="w-[300px]">
            <div>{checkData()}</div>
          </div>
        </div>
        <div className="mt-3">
            <Link to={emailOrPassword()}>
          <button className="w-[100px] h-[40px] text-pp-gray-btn-font font-bold bg-pp-gray-btn-account rounded-[4px]">
            {profileInput}
          </button>
            </Link>
        </div>
      </div>
    </>
  );
  }