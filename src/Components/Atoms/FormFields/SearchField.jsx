import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchField = ({onSearch=()=>{}}) => {
  const [searchText, setSearchText] = useState();

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  //for search field height if fixed width is auto it will be based on parent.
  return (
    <div className="flex gap-1 justify-between border border-[#E2F0FF] rounded-[10px] h-12 px-6 w-auto">
      <input
        type="text"
        placeholder="Search..."
        id="search"
        value={searchText}
        onChange={handleChange}
        className="text-iamblue focus:outline-none text-iamgray-50 text-sm leading-[17px]"
      />
      <button type="button" onClick={()=>onSearch(searchText)} className="">
        <FiSearch className="h-6 w-6 text-iamblue" />
      </button>
    </div>
  );
};
export default SearchField;
