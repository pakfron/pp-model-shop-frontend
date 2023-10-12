import HeaderButton from "../features/header/HeaderButton"
import HeaderImage from "../features/header/HeaderImage"
import { Link } from "react-router-dom"

export default function NavHeader() {
  return (
    <div className="bg-gray-200 top-0 flex items-center justify-between py-5">
        <div className="flex pl-5">
            {/* <span className="flex items-center font-extrabold text-pp-bg-orage ">PP Model Shop</span> */}
            <Link to="/">
            <HeaderImage src={'https://goodsmileshop.com/medias/sys_master/images/images/h50/h98/9516630769694.jpg'} alt={'Hello-GS'}/>
            </Link> 
        </div>
        <div className="flex gap-3 pr-5 items-center">
            <Link to="/login">
            <HeaderButton>Sign in</HeaderButton>
            </Link>
            <Link to="/register">
            <HeaderButton>Register</HeaderButton>
            </Link>
            <HeaderButton>Shopping Cart</HeaderButton>
        </div>
    </div>
  )
}
