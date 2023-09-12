import signatureSandwiches from "../data/sandwichOptions.js";
import potatoChips from "../data/sandwichOptions.js";
import beverages from "../data/sandwichOptions.js";

function Menu() {
  return (
    <>
      <div className="category-container">
        <h2>Signature Sandwiches</h2>
        <h3>
          {signatureSandwiches.name}: ${signatureSandwiches.price}
        </h3>
        <p>{signatureSandwiches.descrition}</p>
        <img src={signatureSandwiches.image} alt="" />
      </div>
      <>
        <div className="category-container">
          <h2>Potato Chip</h2>
          <h3>
            {potatoChips.name}: ${potatoChips.price}
          </h3>
        </div>
      </>
      <>
        <div className="category-container">
          <h2>Beverages</h2>
          <h3>
            {beverages.name}: ${beverages.price}
          </h3>
        </div>
      </>
    </>
  );
}

export default Menu;

// (breadSelection, meatSelection, cheeseSelection, toppingsSelection, dressingSelection, signatureSandwiches, potatoChips,  beverages)
