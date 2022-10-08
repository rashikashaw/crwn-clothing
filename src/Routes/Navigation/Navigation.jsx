import { React } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { CartIcon } from "../../components/Cart-Icon/CartIcon";
import { CartDropdown } from "../../components/Cart-Dropdown/CartDropdown";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles';
import { signOutStart } from "../../store/user/user.actions";


export const Navigation = () => {
  const dispatch  = useDispatch()
  const cartOpen  = useSelector( selectIsCartOpen );
  const currentUser = useSelector(selectCurrentUser);
  const signOutUser = () => dispatch(signOutStart());
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
          {currentUser ? 
            <NavLink
              as= 'span'
              onClick={signOutUser}>
                Sign Out
            </NavLink> 
           :
            <NavLink to="/auth">
              Sign In
            </NavLink>
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
