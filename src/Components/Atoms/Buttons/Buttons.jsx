import { StyledButton } from "./Buttons.style";
const PrimaryButton = ({ width, children }) => {
  return (
    <button
      className={`flex w-full h-12  justify-center items-center bg-iamblue text-iamwhite text-sm leading-[17px] rounded-[10px]`}
    >{children}</button>
  );
};

export { PrimaryButton };
