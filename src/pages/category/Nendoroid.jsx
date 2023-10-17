import BodyPage from "../../features/body/BodyPage";
import ListProductByType from "../../features/product/ListProductByType";

export default function Nendoroid() {
  return (
    
    <BodyPage>
    <div className="flex items-center justify-start gap-5 flex-wrap pl-5">
      <ListProductByType Type={"Nendoroid"}/>
      </div>
    </BodyPage>
    
    
  )
}
