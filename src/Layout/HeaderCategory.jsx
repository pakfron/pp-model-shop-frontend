import ListCategory from "../features/header/headercategory/ListCategory";

export default function HeaderCategory() {
  return (
    <>
      <ul className="flex bg-[#806D66] justify-evenly h-[68px] items-center">
      
        <ListCategory>All Product</ListCategory>
        <ListCategory>Figure</ListCategory>
        <ListCategory>Figma</ListCategory>
        <ListCategory>Nendoroid</ListCategory>
      </ul>
    </>
  );
}
