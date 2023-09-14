// import bYOOptions from "../data/sandwichOptions.js";
// import NavBar from "./NavBar";
import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";

function Menu() {
  return (
    <>
      <div className="category-container">
        <br />
        <h2>Signature Sandwiches</h2>
        <SigSandwichItem />
        <br />
        <h2>Build Your Own Sandwich</h2>
        <p>
          Create your own sandwich by building it from the bread up to the
          toppings and dressings!
        </p>
        <br />
        <h2>Chips</h2>
        <ChipsItem />
        <br />
        <h2>Beverages</h2>
        <BeverageItem />
      </div>
    </>
  );
}

export default Menu;

// (breadSelection, meatSelection, cheeseSelection, toppingsSelection, dressingSelection)
/* <h3>
      {dataSandwiches.signatureSandwiches.name}: $
      {dataSandwiches.signatureSandwiches.price}
    </h3>
    <p>{dataSandwiches.signatureSandwiches.descrition}</p>
    <img src={dataSandwiches.signatureSandwiches.image} alt="" />
  </div>
  <>
    <div className="category-container">
      <h2>Potato Chip</h2>
      <h3>
        {dataSandwiches.potatoChips.name}: $
        {dataSandwiches.potatoChips.price}
      </h3>
    </div>
  </>
  <>
    <div className="category-container">
      <h2>Beverages</h2>
      <h3>
        {dataSandwiches.beverages.name}: ${dataSandwiches.beverages.price}
      </h3> */
