import { useEffect } from "react";
import BodyAccountNav from "../features/My Account/BodyAccountNav";
import MyAccountBody from "../features/My Account/MyAccountBody";
import BodyPage from "../features/body/BodyPage";
import { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";


export default function CheckoutAddress() {
    const {itemCart}= useCart()
const [address,setAddress]=useState()
useEffect(()=>{
    axios.get('/auth/getaddress').then(res=>{
        console.log(res.data.address)
        setAddress(res.data.address)
    })

},[])
console.log(itemCart)

  return (
    <BodyPage>
      <MyAccountBody title={"Checkout"}>
        <div className="w-full flex pl-20 pr-20 justify-between">
          <div className="w-[50%]">
            <div>{address&&address.firstName} {address&&address.lastName}</div>
            <div>{address&&address.address}</div>
            <div>{address&&address.phone}</div>
            {/* <form>
              <div className="flex flex-col">
                <label>Firstname</label>
                <input
                //   onChange={{}}
                  type="text"
                  name="firstName"
                  className="w-[100px] bg-[#F8F5F1] border-pp-border-input rounded-md"
                  placeholder="firstName"
                />
              </div>
              <div className="flex flex-col">
                <label>lastname</label>
                <input
                //   onChange={{}}
                  type="text"
                  name="lastName"
                  className="w-[100px] bg-[#F8F5F1] border-pp-border-input rounded-md"
                  placeholder="lastName"
                />
              </div>
              <div className="flex flex-col">
                <label>Address</label>
                <input
                //   onChange={{}}
                  type="text"
                  name="address"
                  className="w-[100px] bg-[#F8F5F1] border-pp-border-input rounded-md"
                  placeholder="address"
                />
              </div>
              <div className="flex flex-col">
                <label>Phone Number</label>
                <input
                //   onChange={{}}
                  type="text"
                  name="phone"
                  className="w-[100px] bg-[#F8F5F1] border-pp-border-input rounded-md"
                  placeholder="Phone Number"
                />
              </div>
            </form> */}
          </div>
          <div className="w-[50%]">{}</div>
        </div>
      </MyAccountBody>
    </BodyPage>
  );
}
