import { Fragment } from "react";
import NavigationContainer from "./ui/NavigationContainer.tsx";
import NavLogoContainer from "./ui/NavLogoContainer.tsx";
import Logo from "../../../public/crown.svg";
import NavLinksContainer from "./ui/NavLinksContainer.tsx";
import NavLink from "./ui/NavLink.tsx";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <NavigationContainer>
        <NavLogoContainer to={"/"}>
          <img src={Logo} alt="logo" />
        </NavLogoContainer>
        <NavLinksContainer>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/sign-in"}>Sign In</NavLink>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
export default Navigation;
