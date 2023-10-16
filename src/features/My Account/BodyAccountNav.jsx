import { Link } from "react-router-dom";
import AccountNavHeadLine from "./AccountNavHeadLine";
import Li_ListAccountNav from "./Li_ListAccountNav";

import { useAuth } from "../../context/AuthContext";

export default function BodyAccountNav() {
  const {authUser}= useAuth()
  return (
    <div className=" pl-44 pr-44 pb-40">
      <div className=" flex justify-between mb-16">
        <div className="bg-pp-bg-gray  rounded-2xl w-[430px] h-[200px]">
          <AccountNavHeadLine headerText={"PROFILE"} />
          <ul className="pl-9 pt-5 flex flex-col gap-3">
            <Link to={`/my-account/${authUser.id}/profile`}>
            <Li_ListAccountNav listText={"Update Profile"} />
            </Link>
            <Li_ListAccountNav listText={"Password Change"} />
          </ul>
        </div>
        <div className="bg-pp-bg-gray rounded-2xl w-[430px] h-[200px]">
          <AccountNavHeadLine headerText={"ADDRESS BOOK"} />
          <ul className="pl-9 pt-5 flex flex-col gap-3">
            <Li_ListAccountNav listText={"Shipping Address Management"} />
          </ul>
        </div>
      </div>
      <div className="">
        <div className="bg-pp-bg-gray  rounded-2xl w-[430px] h-[200px]">
          <AccountNavHeadLine headerText={"ORDER HISTORY"} />
          <ul className="pl-9 pt-5 flex flex-col gap-3">
            <Li_ListAccountNav listText={"Order History"} />
          </ul>
        </div>
      </div>
    </div>
  );
}
