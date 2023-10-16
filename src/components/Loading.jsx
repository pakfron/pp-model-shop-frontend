import Spinner from "../assets/Spinner-1s-200px.svg";

export default function Loading() {
  return (
    <>
      <div className="h-[100vh] w-full flex justify-center items-center m-auto z-50">
        <div className="">
          <img src={Spinner} />
        </div>
      </div>
    </>
  );
}
