import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";
import Cart from "./Cart.jsx";

function Menu() {
  const sigSandwichStyles = {
    textDecoration: 'underline',
    marginLeft: '20px'
  }
  return (
    <>
      <div className="menu-container">
        <br />
        <h2 style={sigSandwichStyles}>Signature Sandwiches</h2>
        <SigSandwichItem />
        <br />
        <br />
        <br />
        <br />
          <h2>Build Your Own Sandwich</h2>
          <p>
            Create your own sandwich by building it from the bread up to the
            toppings and dressings!
          </p>
          <br />
        <div className="lower-menu-container">
          <h2>Chips</h2>
          <ChipsItem />
          <br />
          <h2>Beverages</h2>
          <BeverageItem />
        </div>
      </div>
    </>
  );
}

export default Menu;
