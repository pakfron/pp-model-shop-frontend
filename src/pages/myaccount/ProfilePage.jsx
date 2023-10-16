import MyAccountBody from "../../features/My Account/MyAccountBody";
import BodyProfilePage from "../../features/My Account/profilepage/BodyProfilePage";
import BodyPage from "../../features/body/BodyPage";

export default function ProfilePage() {
  return (
    <BodyPage><MyAccountBody title={"PROFILE"}>
      <BodyProfilePage/>
    </MyAccountBody>
   
    </BodyPage>
  )
}
