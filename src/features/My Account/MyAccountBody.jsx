export default function MyAccountBody({title,children}) {
  return (
    <div className="bg-white w-full text-[#454545]  border border-none rounded-xl">
      <div className="mb-[60px]">
        <div className="pl-5 pt-5 font-bold text-[1.25rem] border-b-[1px]">
          <div className="h-[60px] flex items-center">{title}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
