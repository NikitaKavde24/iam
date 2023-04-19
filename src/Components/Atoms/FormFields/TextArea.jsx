import { useState } from "react";

export default function TextArea({ label, placeholder, className,charLimit }) {
    const [charCount,setCharCount]=useState(0)
  return (
    <div className="relative flex flex-col">
      <label className="text-lg font-medium leading-[17px] text-left text-iamblue mb-2">
        {label}
      </label>
      <div
        className={`flex pl-4 pt-5 pb-2 pr-2 h-[164px] border border-[#13182A] rounded-[10px] ${className}`}
      >
        <textarea
          type="text"
          placeholder={placeholder}
          id="textarea"
          maxLength={charLimit}
          // value={searchText}
          // onChange={handleChange}
          className="focus:outline-none font-medium text-sm leading-[17px] text-iamblack-50 w-full placeholder:text-iamgray-50 resize-none"
        />
        {charLimit && (
          <span
            className={`absolute bottom-2 right-2 text-iamgray-50 text-sm font-medium`}
          >
            {charCount} / {charLimit}
          </span>
        )}
      </div>
    </div>
  );
}
