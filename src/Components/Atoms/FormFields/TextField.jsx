export default function TextField({ label, placeholder, className, error }) {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-medium leading-[17px] text-left text-iamblue mb-2">
        {label}
      </label>
      <div className={`flex pl-4 pr-2 h-[54px] border border-[#13182A] rounded-[10px] items-center ${className}`}>
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
