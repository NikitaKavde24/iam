const FileField = ({label,className}) => {
  //for search field height if fixed width is auto it will be based on parent.
  return (
    <div className="relative flex flex-col">
      <label className="text-lg font-medium leading-[17px] text-left text-iamblue mb-2">
        {label}
      </label>
      <div
        className={`flex pl-4 pt-5 pb-2 pr-2 h-[164px] border border-[#13182A] rounded-[10px] ${className}`}
      ></div>
    </div>
  );
};
export default FileField;
