import ListCategory from "../features/header/headercategory/ListCategory";

export default function HeaderCategory() {
  return (
    <>
    <div className="bg-[#806D66] flex items-center justify-center">
      <ul className=" flex  justify-evenly h-[68px]  items-center  w-[100%] min-w-[980px] max-w-[1300px]">
        <ListCategory>All Product</ListCategory>
        <ListCategory>Figure</ListCategory>
        <ListCategory>Figma</ListCategory>
        <ListCategory>Nendoroid</ListCategory>
      </ul>
    </div>
    </>
  );
}
