import { useEffect } from "react";
import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";
import { useOrder } from "../../context/OrderContext";
import dayjs from "dayjs";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
export default function OrderHistoryAdminPage() {
  const { getOrderAdmin, setOrderAdmin, orderAdmin } = useOrder();
  const navigate =useNavigate()
  useEffect(() => {
    getOrderAdmin();
  }, []);

const changeStatusOrder = (event,orderId)=>{

event.preventDefault()
  axios.patch('payment/orderhistoryy/admin/order/changestatus',{orderId}).then((res)=>{
    console.log(res.data)
    getOrderAdmin()
  }).catch((error)=>{
    console.log(error)
  })
}


  return (
    <BodyPage>
      <MyAccountBody title={"Order History"}>
        <div className="flex flex-col justify-center">
          {orderAdmin &&
            orderAdmin.map((order, index) => (
              
                <div
                  key={index}
                  className="h-auto rounded-lg py-5 px-5  bg-pp-bg-gray mr-10 ml-10 mb-10 flex flex-col gap-5"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-5">
                      <div onClick={(event)=>{
                        event.preventDefault()
                        navigate(`/admin/product/detail/${order.id}`)
                      }}>Order Number: {order && order.id}</div>
                      <div>
                        {order && order?.slip ? (
                          <>
                            <div>
                              {
                                <a href={order.slip} target="_blank">
                                  Slip
                                </a>
                              }
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-red-600">
                              ลูกค้ายังไม่อัพโหลด slip
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <div>
                        {
                          order && order?.slip ? "" : ""
                          // <span className=" font-bold text-red-500 border-b-2">
                          //   Upload Slip
                          // </span>
                        }
                      </div>
                      <div>
                        {order && order.dateTime
                          ? dayjs(order.dateTime).format("DD/MM/YYYY")
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center font-bold">
                    <div className="flex gap-5 items-center">
                      <div>{order && order.OrderStatus}</div>
                      <div>
                        <button onClick={(event)=>{changeStatusOrder(event,order.id)}} className=" w-[150px] rounded-lg h-[50px] text-white bg-pp-login-button">ChangeStatus</button>
                      </div>
                    </div>
                    <div>{order && order.totalPrice} บาท</div>
                  </div>
                </div>
              
            ))}
        </div>
      </MyAccountBody>
    </BodyPage>
  );
}
