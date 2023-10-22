
export default function ButtonMyAccount({children, onClick}) {
  return (
    <button className="bg-pp-login-button w-[135px] h-[65px] rounded-lg text-white mt-[40px]" onClick={onClick}>{children}</button>
  )
}
