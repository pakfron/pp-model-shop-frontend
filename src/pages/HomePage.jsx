import BodyPage from "../features/body/BodyPage";
import AllListProduct from "../features/product/AllListProduct";
import ProductContainer from "../features/body/ProductContainer";

export default function HomePage() {
  return (
    <BodyPage>
      <ProductContainer>
        <AllListProduct />
      </ProductContainer>
    </BodyPage>
  );
}
