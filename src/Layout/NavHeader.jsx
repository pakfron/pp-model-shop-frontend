import { useAuth } from "../context/AuthContext";
import HeaderButton from "../features/header/HeaderButton";
import HeaderImage from "../features/header/HeaderImage";
import { Link } from "react-router-dom";
import { getAccessToken, removeAccessToken } from "../utilis/local-storage";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

export default function NavHeader() {
  const { authUser,setAuthUser,setLoading,loading } = useAuth();

 

 const logoutAccount =()=>{
  if(getAccessToken()){
    setLoading(true)
    removeAccessToken()
    setAuthUser(null)
    window.location.href="/"
    setLoading(false)
  }
 }

 if(!loading){
  return <Loading/>
}


  return (
    <div className="w-full flex items-center justify-center bg-gray-300">
      <div className=" top-0 flex items-center justify-between py-5 w-[100%] min-w-[980px] max-w-[1300px]">
        <div className="flex">
          {/* <span className="flex items-center font-extrabold text-pp-bg-orage ">PP Model Shop</span> */}
          <Link to="/">
            <HeaderImage
              src={
                "https://goodsmileshop.com/medias/sys_master/images/images/h50/h98/9516630769694.jpg"
              }
              alt={"Hello-GS"}
            />
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          {!authUser && (
            <>
              <Link to="/login">
                <HeaderButton>Sign in</HeaderButton>
              </Link>
              <Link to="/register">
                <HeaderButton>Register</HeaderButton>
              </Link>
            </>
          )}
          {authUser && (
            <>
            <Link to={`/my-account/${authUser.id}`}>
              <HeaderButton>My Account {authUser.username}</HeaderButton>
            </Link>
            <HeaderButton onClick={logoutAccount}>Log Out</HeaderButton>
            </>
          )}

          <HeaderButton>Shopping Cart</HeaderButton>
        </div>
      </div>
    </div>
  );
}
