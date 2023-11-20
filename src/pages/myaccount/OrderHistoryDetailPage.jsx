import { useEffect } from "react";
import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";
import MyAccountPage from "../MyAccountPage";
import { useOrder } from "../../context/OrderContext";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function OrderHistoryDetailPage() {
  const navigate = useNavigate()
  const { getOrderById, setIsOrderId, isOrderId } = useOrder();
  const {authUser} = useAuth()
  const { orderId } = useParams();

  const fetchOrderByid = async () => {
    const id = Number(orderId);
    const { orderById } = await getOrderById(id);
    setIsOrderId(orderById);
    console.log(orderById[0].orderItem);
  };
  useEffect(() => {
    fetchOrderByid();
  }, []);
  return (
    <BodyPage>
      <MyAccountBody title={"Order History Detail"}>
        <div className="w-full">
          <div className="w-100% bg-pp-bg-gray mx-10 py-6 rounded-lg ">
            <div className="flex justify-between text-2xl">
              <div className="font-bold">
                Order Number {isOrderId && isOrderId[0].id}
              </div>
              <div className="font-bold">
                {isOrderId && isOrderId[0].dateTime ? (
                  dayjs(isOrderId[0].dateTime).format("DD/MM/YYYY")
                ) : (
                  <div
                  onClick={(event)=>{
                    event.preventDefault()
                    navigate(`/payment/${authUser.id}/${isOrderId[0].id}`)
                  }}
                  className="text-red-600 cursor-pointer">Upload Slip</div>
                )}
              </div>
            </div>
            <div className="flex justify-between font-bold text-2xl pt-4">
              <div>{isOrderId && isOrderId[0].OrderStatus}</div>
              <div>{isOrderId && isOrderId[0].totalPrice} บาท</div>
            </div>
            <div className="pt-4 w-[50%]">
              <div className="pt-4 text-2xl font-bold">Address</div>
              <div className="flex flex-col gap-2 pt-8">
                <div className="flex gap-4">
                  <div>{isOrderId && isOrderId[0].address.firstName}</div>
                  <div>{isOrderId && isOrderId[0].address.lastName}</div>
                </div>
                <div>
                  <div>{isOrderId && isOrderId[0].address.address}</div>
                </div>
                <div>Phone : {isOrderId && isOrderId[0].address.phone}</div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div></div>
              <div className="flex justify-between  font-bold">
                <div className="w-[80px] flex items-center justify-center ">
                  Quantity
                </div>
                <div className="w-[70px] flex items-center justify-center">
                  Price
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                {isOrderId &&
                  isOrderId[0].orderItem.map((data) => {
                    return (
                      <>
                        <div className="flex mb-3 ml-4">
                          <div className="flex justify-between w-full">
                            <div className="flex gap-5">
                              <div>
                                <img
                                  className="w-[100px]"
                                  src={data.product.imageproduct[0].imageUrl}
                                />
                              </div>
                              <div className="flex items-center">
                                {data.product.name}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center w-[174px]  justify-between">
                            <div className=" w-[80px] flex items-center justify-center ">
                              {data.quantity}
                            </div>
                            <div className="w-[70px] flex items-center justify-center">
                              {data.product.price * data.quantity}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </MyAccountBody>
    </BodyPage>
  );
}
