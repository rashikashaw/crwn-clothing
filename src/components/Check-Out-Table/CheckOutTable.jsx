import { CheckOutItem } from "../Check-Out-item/CheckOutItem";
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import './CheckOutTable.styles.scss'
export const CheckOutTable = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
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
      </div>
  );
};

