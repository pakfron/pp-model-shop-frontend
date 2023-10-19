import BodyPage from "../features/body/BodyPage";

export default function PaymentPage() {
  return (
    <BodyPage>
      <div className="bg-white w-full pb-10">
        <div className="flex items-center flex-col pt-10">
          <div>ช่องทางการชำระเงิน</div>
          <div>ธนาคาร กกกกกกก</div>
          <div>เลขที่บัญชี 111-1-1111-1-11</div>
          <div>นาย เอ บีซีดี</div>
        </div>
        <div className="flex items-center flex-col">
          <img src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg" />
        </div>
        <div className="flex justify-center">
        <form className="pt-10" encType="multipart/form-data">
            <input type="file" className="w-[500px]"/>
            <button className={"w-[270px] bg-pp-login-button h-[70px]  rounded-xl text-base text-white font-bold"}>Upload</button>
        </form>
        </div>
      </div>
    </BodyPage>
  );
}
