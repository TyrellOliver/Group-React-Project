import "../Styles/Cart.css";

function Cart() {
  return (
    <>
      <div className="menucart">
        <h4>Your Cart:</h4>
        <h5>
          Build Your Own Sandwich <span>$6.00</span>
        </h5>
        <h6>
          - Bread Selection (Choose one): <br />
          Whole Wheat Bread (Sliced) ...$0 <br />
          - Meat Selection (Choose up to 10): <br />
          Boar's Head Maple Glazed Honey Coat Ham ...$4.50 <br />
          - Cheese Selection (Choose up to 5): <br />
          Private Selection Provolone ...$1.25 <br />
          - Toppings Selection (Choose up to 10): <br />
          Sliced Tomato ...$0.25 <br />
          Lettuce ...$0 <br />
          Sliced Red Onion ...$0 <br />
          Banana Peppers ...$0 <br />
          - Dressing Selection (Choose up to 5): <br />
          Honey Mustard ...$0 <br />
          Salt ...$0 <br />
          Ground Pepper ...$0 <br />
        </h6>
        <h5>
          Rico's B-B-Q Honey Ham Sandwich <span>$6.79</span>
          <br />
          Bag of Nacho Cheese Doritos <span>$1.99 </span>
          <br />
          Dasani Bottled Water (20 oz.) <span>$1.25 </span>
          <br />
          Bottled Diet Dr Pepper (20 oz.) <span>$1.99 </span>
          <br />
        </h5>
        <br />
        <br />
        <h5>
          <span>SubTotal: $16.02</span>
          <br />
          <span>Sales Tax 8.875%: $ 1.42</span>
        </h5>
        <h4>
          <span>Total Due: $17.44</span>
        </h4>
      </div>
    </>
  );
}
export default Cart;

// import React, {useState} from "react"

// const Cart = ({cartItems, removeFromCart}) => {
//     const [totalPrice, setTotalPrice] = useState(0);

// const calculateTolalPrice = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//         total += item.price;
//     });
//     return total.toFixed(2);
//     };

//  useState(() => {
//     setTotalPrice(calculateTolalPrice());
//  }, [cartItems]);

//  return (
//     <div className="cart">
//         <h2>Sandwich's Cart</h2>
//         <ul>{cartItems.map((item, index) => (
//             <li key ={index}>
//                 {item.name} - ${item.price.ToFixed(2)}
//                 <button onClick={() => removeFromCart(index)}>Remove</button>
//             </li>
//         ))}
//         </ul>
//         <div className="total">
//             <strong>Total Price:</strong> ${totalPrice}
//         </div>
//     </div>
//  );
// }
// export default Cart;
