import { CheckOutItem } from "../Check-Out-item/CheckOutItem";
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import './CheckOutTable.styles.scss'
import { useSelector } from "react-redux";
import { PaymentForm } from "../Payment-Form/PaymentForm";

export const CheckOutTable = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotal);
  return (
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        { cartItems.length ? 
          (
            cartItems.map((cartItem) => (<CheckOutItem key={cartItem.id} cartItem={cartItem}/>))
          ) : 
          (
            <span>Your cart is empty</span>
          )
        }
        <span className="total">Total: ${totalAmount}</span>
        <PaymentForm/>
      </div>
  );
};

