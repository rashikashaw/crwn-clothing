import { useContext } from "react";
import { React } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { CartIcon } from "../../components/Cart-Icon/CartIcon";
import { CartDropdown } from "../../components/Cart-Dropdown/CartDropdown";
import { CartContext } from "../../contexts/cart.context";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles';

export const Navigation = () => {
  const { currentUser } = useContext( UserContext );
  const { cartOpen } = useContext( CartContext );

  return(
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo"/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>Sign Out</span> 
              ) : (<NavLink to="/auth">
              Sign In
            </NavLink>
            )
          }
            <CartIcon />
        </NavLinks>
        {
          cartOpen && 
          <CartDropdown/>
        } 
      </NavigationContainer>
      <Outlet />
    </>
  );
}
