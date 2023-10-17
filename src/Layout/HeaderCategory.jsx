import { Link } from "react-router-dom";
import ListCategory from "../features/header/headercategory/ListCategory";

export default function HeaderCategory() {
  return (
    <>
      <div className="bg-[#806D66] flex items-center justify-center">
        <ul className=" flex  justify-evenly h-[68px]  items-center  w-[100%] min-w-[980px] max-w-[1300px]">
          <Link to="/">
            <ListCategory>All Product</ListCategory>
          </Link>
          <Link to="/figure">
            <ListCategory>Figure</ListCategory>
          </Link>
          <Link to="/figma">
            <ListCategory>Figma</ListCategory>
          </Link>
          <Link to="/nendoroid">
            <ListCategory>Nendoroid</ListCategory>
          </Link>
        </ul>
      </div>
    </>
  );
}
