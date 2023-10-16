import AccountProfileData from "./AccountProfileData";

export default function BodyProfilePage() {
  return (
    <>
    <div className="flex flex-col gap-8 mb-14">
      <AccountProfileData profileInput={"E-mail"} />
             
      <AccountProfileData profileInput={"Password"} />
    </div>
    </>
  );
}
