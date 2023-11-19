import { useEffect } from "react";
import { useOrder } from "../context/OrderContext";
import MyAccountBody from "../features/My Account/MyAccountBody";
import BodyPage from "../features/body/BodyPage";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function OrderHistoryPage() {
  const { order, getOrder } = useOrder();
  const {accountId}=useParams()

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <BodyPage>
      <MyAccountBody title={"Order History"}>
        <div className="flex flex-col justify-center">
          {order &&
            order.map((order, index) => (
              <>
                <div
                  key={index}
                  className="h-auto rounded-lg py-5 px-5  bg-pp-bg-gray mr-10 ml-10 mb-10 flex flex-col gap-5"
                >
                  <div className="flex justify-between">
                    <div>Order Number: {order && order.id}</div>
                    <div>
                      <div>
                        {order && order?.slip ? (
                          ""
                        ) : (
                          <Link to={`/payment/${accountId}/${order.id}`}>
                            <span className=" font-bold text-red-500 border-b-2">
                              Upload Slip
                            </span>
                          </Link>
                        )}
                      </div>
                      <div>{order && order.dateTime? dayjs(order.dateTime).format('DD/MM/YYYY'):""}</div>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold">
                    <div>{order && order.OrderStatus}</div>
                    <div>{order && order.totalPrice} บาท</div>
                  </div>
                </div>
              </>
            ))}
        </div>
      </MyAccountBody>
    </BodyPage>
  );
}
