import logo from "../../../../src/assets/Images/logo.png";
import { MenuItem } from "../../Atoms";
import { MenuContainer, Logo } from "./MainMenu.style";
import { RiDashboardLine } from "react-icons/ri";

export const MainMenu = () => {
  return (
    <MenuContainer>
      <a href={"/"}>
        <Logo src={logo} alt="coyni_Logo" />
      </a>
      <MenuItem label="Dashboard" icon={<RiDashboardLine />} />
      {/* <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem /> */}
    </MenuContainer>
  );
};
