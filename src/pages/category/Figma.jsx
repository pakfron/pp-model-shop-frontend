import BodyPage from "../../features/body/BodyPage"
import ListProductByType from "../../features/product/ListProductByType"

export default function Figma() {
  return (
    <BodyPage>
    <div className="flex items-center justify-start gap-5 flex-wrap pl-5">
      <ListProductByType Type={"Figma"}/>
      </div>
    </BodyPage>
  )
}
