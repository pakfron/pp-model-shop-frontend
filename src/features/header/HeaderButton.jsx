export default function HeaderButton({children,onClick}) {
  return (
    <button className="bg-pp-bg-orage border border-none rounded-xl w-40 h-[64px]" onClick={onClick}>{children}</button>
    
  )
}
