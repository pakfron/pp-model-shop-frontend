import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ButtonMyAccount from "../../features/My Account/ButtonMyAccount";
import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";

export default function AddressPage() {
  const { address,editAddress,setEditAddress,addressEdit,addAddress} = useAuth();

  const [modal,setModal] = useState(false)
  const [newAddress,setNewAddress] = useState(false)

const handleOnChange =(event)=>{
  setEditAddress({...editAddress,[event.target.name]:event.target.value})
}

  const handleModal = ()=>{
    setModal(!modal)
    console.log('modal')
    setEditAddress(address)
  }

  const handleNewAddress = ()=>{
    setNewAddress(!newAddress)
    console.log('first')
  }

  const testNewAddress = (event)=>{
    event.preventDefault()
    setNewAddress(!newAddress)
    addAddress(editAddress)
  }

const TestEditAddress = (event)=>{
  event.preventDefault()
  setModal(!modal)
  addressEdit(editAddress)

}


  return (
    
    <BodyPage>
      <MyAccountBody title={"ADDRESS BOOK"}>
     
        <div className="flex items-start pl-20 pr-20 mb-20 relative">
          
          <div className="w-[40%]">
            <div className="max-w-[100px] font-bold">
              Manage your address Book
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-5">
            { 
            
            (modal&& <>
              
              <div className="flex gap-4">
              <input className="bg-[#F8F5F1] w-[200px] rounded-md border pl-2" onChange={handleOnChange} value={editAddress.firstName} name="firstName" />
              <input className="bg-[#F8F5F1] w-[200px] rounded-md border pl-2" defaultValue={editAddress.lastName} onChange={handleOnChange} name="lastName" />
                  </div>
                  <input className="bg-[#F8F5F1] rounded-md border pl-2" defaultValue={editAddress.address} onChange={handleOnChange} name="address" />
                  <input className="bg-[#F8F5F1]  rounded-md border pl-2" defaultValue={editAddress.phone} onChange={handleOnChange} name="phone" />
                  <div className="flex gap-10">
                  <ButtonMyAccount onClick={handleModal}>Cancel</ButtonMyAccount>
                  <ButtonMyAccount onClick={TestEditAddress}>Save</ButtonMyAccount>
                  </div>
              </>) ||
              
            (address ? (
              <>
                <div className="flex gap-4">
                  <div className="w-[200px] rounded-md pl-2"  >{address.firstName}</div>
                  <div className="w-[200px] rounded-md pl-2">{address.lastName}</div>
                </div>
                <div className=" rounded-md pl-2">{address.address}</div>
                <div className="rounded-md pl-2">{address.phone}</div>
                <ButtonMyAccount onClick={handleModal}>Edit Address</ButtonMyAccount>
              </>
            ) : (
              (newAddress
                &&
                <>
                <div className="flex gap-4">
                <input placeholder="Firstname" className="bg-[#F8F5F1] w-[200px] rounded-md border pl-2" onChange={handleOnChange} value={editAddress?.firstName} name="firstName" />
                <input placeholder="Lastname" className="bg-[#F8F5F1] w-[200px] rounded-md border pl-2" defaultValue={editAddress?.lastName} onChange={handleOnChange} name="lastName" />
                    </div>
                    
                    <input placeholder="Address" className="bg-[#F8F5F1] rounded-md border pl-2" defaultValue={editAddress?.address} onChange={handleOnChange} name="address" />
                    <input placeholder="Phone Number" className="bg-[#F8F5F1]  rounded-md border pl-2" defaultValue={editAddress?.phone} onChange={handleOnChange} name="phone" />
                    <div className="flex gap-10">
                    <ButtonMyAccount onClick={handleNewAddress}>Cancel</ButtonMyAccount>
                    <ButtonMyAccount onClick={testNewAddress}>Save</ButtonMyAccount>
                    </div>
                </>
                )
              
              ||

              (<>
                <div>No Saved Addresses</div>
                <ButtonMyAccount onClick={handleNewAddress}>Add New</ButtonMyAccount>
              </>)
            ))}
          </div>
        </div>
        <div></div>
      </MyAccountBody>
    </BodyPage>
  );
}
