import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyPage from "../../features/body/BodyPage";

export default function AddressPage() {
  return (
    <BodyPage>
      <MyAccountBody title={"ADDRESS BOOK"}>
        <div>
          <div>Manage your address Book</div>
          <div>add</div>
        </div>
      </MyAccountBody>
    </BodyPage>
  );
}
