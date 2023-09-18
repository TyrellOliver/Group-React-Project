function Cart() {
  return <></>;
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
