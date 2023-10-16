import { useParams } from "react-router-dom";
import BodyAccountNav from "../features/My Account/BodyAccountNav";
import MyAccountBody from "../features/My Account/MyAccountBody";
import BodyPage from "../features/body/BodyPage";

export default function MyAccountPage() {
  const{accountId}=useParams()
  console.log(accountId)
  return (
    <BodyPage>
    <MyAccountBody title={"MY ACCOUNT"}><BodyAccountNav/></MyAccountBody>
    </BodyPage>
  )
}
