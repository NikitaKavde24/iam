import React, { useState } from "react";
import { ImPencil } from "react-icons/im";
const PrimaryButton = ({ children, onButtonClick = () => {} }) => {
  return (
    <button
      className={`flex w-full h-12  justify-center items-center bg-iamblue text-iamwhite text-sm leading-[17px] rounded-[10px]`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

const CommentButton = ({ data, CommentBody }) => {
  const [showCommentBody, setShowCommentBody] = useState(false);
  const onClickHandler = (data) => {
    setShowCommentBody(true);
  };
  return (
    <div>
      <div className="w-[168px] flex justify-between border border-[#CEE3FC] h-10 rounded-[10px]">
        <span className="flex items-center w-full ml-1 text-xs text-iamgray-50 leading-[17px">
          Comment...
        </span>
        <button
          className="w-[37px] flex justify-center items-center border-l border-[#CEE3FC] rou"
          onClick={() => onClickHandler(data)}
        >
          <ImPencil className="w-5 h-5 text-iamblue" />
        </button>
      </div>
      <div className="relative">{showCommentBody && CommentBody}</div>
    </div>
  );
};

export { PrimaryButton, CommentButton };
