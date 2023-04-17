import { MenuItemContainer, MenuIconContainer } from "./MenuItem.style";

const MenuItem = ({ icon, label, children, url = "/", size }) => {
  return (
    <MenuItemContainer className="hover:bg-iamblue hover:text-iamwhite">
      <MenuIconContainer>{icon ? icon : "icon2"}</MenuIconContainer>
      <div>{label ? label : "label"}</div>
    </MenuItemContainer>
  );
};

export default MenuItem;
