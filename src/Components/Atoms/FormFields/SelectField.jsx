import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const SelectField = ({ label, className, placeholder }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "Design[UX/UI]",
    "Develop-FE",
    "Develop-FE",
    "Develop-FE",
    "Develop-FE",
  ];

  const handleClick = () => {
    setIsActive(!isActive);
  };
  //for search field height if fixed width is auto it will be based on parent.
  return (
    <div className={`realtive h-[50px] z-10 mb-4 ${className}`}>
      <label className="text-lg font-medium leading-[17px] text-left text-iamblue mb-2">
        {label}
      </label>
      <div
        className={`absolute bg-iamwhite z-10 pl-4 pr-2  border border-[#13182A] rounded-[10px] ${className}`}
      >
        <div
          className="flex justify-between items-center min-h-[50px]"
          onClick={handleClick}
        >
          <span className="text-sm font-medium leading-[17px] text-iamgray-50">
            Placeholder
          </span>
          <IoIosArrowDown className="text-iamblack-50" />
        </div>
        {isActive && (
          <div className="flex flex-col gap-3 pb-2">
            {options.map((item, key) => {
              return (
                <div
                  key={key}
                  className="text-sm font-medium text-iamblack-50 leading-[17px]"
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
    // <div className="flex flex-col">
    //   <label className="text-lg font-medium leading-[17px] text-left text-iamblue mb-2">
    //     {label}
    //   </label>
    //   <div
    //     className={`relative z-20 flex flex-col pl-4 pr-2  border border-[#13182A] rounded-[10px] ${className}`}
    //   >
    //     <div
    //       className="flex justify-between items-center min-h-[50px]"
    //       onClick={handleClick}
    //     >
    //       <span className="text-sm font-medium leading-[17px] text-iamgray-50">
    //         {placeholder}
    //       </span>
    //       <IoIosArrowDown className="text-iamblack-50" />
    //     </div>
    //     {isActive && (
    //       <div>
    //         {/* {options.map((item, key) => {
    //           return <div key={key}>{item.label}</div>;
    //         })} */}
    //         <li>option1</li>
    //         <li>option1</li>
    //         <li>option1</li>
    //         <li>option1</li>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};
export default SelectField;
