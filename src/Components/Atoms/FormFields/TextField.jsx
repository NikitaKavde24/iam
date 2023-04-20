import { IoMdAttach } from "react-icons/io";
export default function TextField({
  label,
  placeholder,
  className,
  error,
  isAttachIcon = false,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex mb-2">
        <label className="text-lg font-medium leading-[17px] text-left text-iamblue ">
          {label}
        </label>
        {isAttachIcon && <IoMdAttach className="w-[21px] ml-1 text-iamblue" />}
      </div>

      <div
        className={`flex pl-4 pr-2 h-[54px] border border-[#13182A] rounded-[10px] items-center ${className}`}
      >
        <input
          type="text"
          placeholder={placeholder}
          id="search"
          // value={searchText}
          // onChange={handleChange}
          className="focus:outline-none font-medium text-sm leading-[17px] text-iamblack-50 w-full placeholder:text-iamgray-50 "
        />
      </div>
      {error && (
        <div className="text-sm ml-4 h-[17px] font-medium leading-[17px] text-iamred text-left mt-0.5">
          {error}
        </div>
      )}
    </div>
  );
}
