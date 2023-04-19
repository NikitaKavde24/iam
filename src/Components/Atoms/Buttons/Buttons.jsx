import { StyledButton } from "./Buttons.style";
const PrimaryButton = ({ children, onButtonClick=()=>{}}) => {
  return (
    <button
      className={`flex w-full h-12  justify-center items-center bg-iamblue text-iamwhite text-sm leading-[17px] rounded-[10px]`}
      onClick={onButtonClick}
    >{children}</button>
  );
};

export { PrimaryButton };
