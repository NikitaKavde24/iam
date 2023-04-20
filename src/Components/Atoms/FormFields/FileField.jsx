import { HiPlus } from "react-icons/hi";
const FileField = ({ label, className }) => {
  //for search field height if fixed width is auto it will be based on parent.
  return (
    <div className="relative flex flex-col">
      <label className="text-lg font-medium leading-[17px] text-left text-iamblue mb-2">
        {label}
      </label>
      <div
        className={`flex flex-col items-center pl-4 pt-5 pb-2 pr-2 h-[164px] border border-[#13182A] rounded-[10px] ${className}`}
      >
        <div className="text-sm font-medium leading-[17px] text-iamgray-50">Upload Screenshots or Doc, PPT</div>
        <div className="flex flex-col gap-[13px] justify-center items-center mt-3 h-[98px] w-[98px] rounded-[10px] border border-dashed border-iamblue-900">
          <HiPlus className="h-7 w-7 text-iamblack"/>
          <span className="text-sm font-medium leading-[17px] text-iamblack-50">Attach</span>
        </div>
      </div>
    </div>
  );
};
export default FileField;
