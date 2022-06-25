import { useContext } from "react";
import { React } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import './Navigation.styles.scss';
import { signOutUser } from "../../Utils/Firebase/firebase.utils";
import { CartIcon } from "../../components/Cart-Icon/CartIcon";
import { CartDropdown } from "../../components/Cart-Dropdown/CartDropdown";
import { CartDropdownContext } from "../../contexts/cartDropdown.context";

export const Navigation = () => {
  const { currentUser } = useContext( UserContext );
  const { cartOpen } = useContext( CartDropdownContext );

  return(
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>Sign Out</span> 
              ) : (<Link className="nav-link" to="/auth">
              Sign In
            </Link>
            )
          }
            <CartIcon />
        </div>
        {
          cartOpen && 
          <CartDropdown/>
        } 
      </div>
      <Outlet />
    </>
  );
}
