import { MenuItemContainer, MenuIconContainer } from "./MenuItem.style";

const MenuItem = ({ icon, label, children, url = "/", size }) => {
  return (
    <MenuItemContainer className="hover:bg-iamblue-700 hover:text-iamblue">
      <div>{icon ? <img src={icon} /> : "icon2"}</div>
      <div className="font-semibold text-iamblue">{label ? label : "label"}</div>
    </MenuItemContainer>
  );
};

export default MenuItem;
