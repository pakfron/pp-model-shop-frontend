export default function BodyPage({children,className}) {
  return (
    <div className=" mt-5 mb-5 flex justify-center">
      <div className={`w-[100%]  max-w-[1300px] flex ${className}`}>{children}</div>
    </div>
  )
}
