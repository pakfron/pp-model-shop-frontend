export default function InputLoginPage({ type="text",id,value,onChange,className, name, placeholder }) {
  return (
    <input
    type={type}
    id={id}
      className={
        className + " " + "bg-[#F8F5F1] outline-none h-10  px-2 border border-solid border-pp-border-input rounded-md focus:ring-1 focus:ring-blue-300 focus:border-x-blue-500"
      }
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
