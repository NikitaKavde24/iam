import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const SelectField = ({ label, className, placeholder }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];

  const handleClick=()=>{
    setIsActive(!isActive)
  }
  //for search field height if fixed width is auto it will be based on parent.
  return (
    <div className="flex flex-col">
      <label className="text-lg font-medium leading-[17px] text-left text-iamblue mb-2">
        {label}
      </label>
      <div
        className={`relative z-20 flex flex-col pl-4 pr-2  border border-[#13182A] rounded-[10px] ${className}`}
      >
        <div
          className="flex justify-between items-center h-[50px]"
          onClick={handleClick}
        >
          <span className="text-sm font-medium leading-[17px] text-iamgray-50">
            Placeholder
          </span>
          <IoIosArrowDown className="text-iamblack-50" />
        </div>
        {isActive && (
          <div>
            {/* {options.map((item, key) => {
              return <div key={key}>{item.label}</div>;
            })} */}
            <li>option1</li>
            <li>option1</li>
            <li>option1</li>
            <li>option1</li>
          </div>
        )}
      </div>
    </div>
  );
};
export default SelectField;
