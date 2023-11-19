import BodyPage from "../features/body/BodyPage";
import AllListProduct from "../features/product/AllListProduct";
import ProductContainer from "../features/body/ProductContainer";
import { useAuth } from "../context/AuthContext";
import MyAccountBody from "../features/My Account/MyAccountBody";
import AccountNavHeadLine from "../features/My Account/AccountNavHeadLine";
import Li_ListAccountNav from "../features/My Account/Li_ListAccountNav";
import { Link } from "react-router-dom";
export default function HomePage() {
  const { authUser } = useAuth();
  return (
    <BodyPage>
      {authUser && authUser?.role ? (
        <>
          <MyAccountBody title={"Admin"}>
            <div className=" pl-10 pb-40">
              <div className="bg-pp-bg-gray  rounded-2xl w-[430px] h-[200px]">
               
                <ul className="pl-9 pt-5 flex flex-col gap-3">
                  <Link to="/admin/orderhistory">
                  <Li_ListAccountNav listText={"Order History"} />
                  </Link>
                  <Link to="/admin/product">
                  <Li_ListAccountNav listText={"Product"} />
                  </Link>
                </ul>
              </div>
            </div>
          </MyAccountBody>
        </>
      ) : (
        <ProductContainer>
          <AllListProduct />
        </ProductContainer>
      )}
    </BodyPage>
  );
}
