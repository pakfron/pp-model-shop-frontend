import ButtonMyAccount from "../../features/My Account/ButtonMyAccount";
import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";

export default function AddressPage() {
  return (
    <BodyPage>
      <MyAccountBody title={"ADDRESS BOOK"}>
        <div className="flex items-start pl-20 pr-20 mb-20">
          <div className="w-[40%]">
            <div className="max-w-[100px] font-bold">
              Manage your address Book
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-10">
            <div>No Saved Addresses</div>
            <ButtonMyAccount>Add New</ButtonMyAccount>
          </div>
        </div>
        <div></div>
      </MyAccountBody>
    </BodyPage>
  );
}
