import { useState } from "react";
import BodyPage from "../features/body/BodyPage";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const navigate =useNavigate();
  const {loading,setLoading} = useAuth()
  const [file, setFile] = useState(null);
  const { orderId ,accountId } = useParams();
  const handleFileChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      setFile(image);
    }
  };

  const uploadImage = (event) => {


    const data = new FormData();
    data.append("image", file);
    data.append("orderId",orderId)
    axios
      .post("/payment/slip", data)
      .then((res) => {
        setLoading(true)
        
        navigate(`/orderhistory/${accountId}`)
      }
      )
      .catch((err) => console.log(err)).finally( setLoading(false));
     
    
  };
  if(!loading==="true"){
    return <Loading/>
  }
  

  return(
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
          <form
            className="pt-10"
            encType="multipart/form-data"
            onSubmit={(event) => {
              event.preventDefault();
              uploadImage(event);
            }}
          >
            <input
              onChange={handleFileChange}
              type="file"
              className="w-[500px]"
            />
            <button
              className={
                "w-[270px] bg-pp-login-button h-[70px]  rounded-xl text-base text-white font-bold"
              }
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </BodyPage>
  );
}
