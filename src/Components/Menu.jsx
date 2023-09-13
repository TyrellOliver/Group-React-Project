// import signatureSandwiches from "../data/sandwichOptions.js";
// import potatoChips from "../data/sandwichOptions.js";
// import beverages from "../data/sandwichOptions.js";
import dataFromSandwichOptions from "../data/sandwichOptions.js";
import NavBar from "./NavBar";

function Menu() {
  console.log("dataFromSandwichOptions", dataFromSandwichOptions);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <>
        <div className="category-container">
          <h2>Signature Sandwiches</h2>
          <h3>
            {dataFromSandwichOptions.signatureSandwiches.name}: $
            {dataFromSandwichOptions.signatureSandwiches.price}
          </h3>
          <p>{dataFromSandwichOptions.signatureSandwiches.descrition}</p>
          <img src={dataFromSandwichOptions.signatureSandwiches.image} alt="" />
        </div>
        <>
          <div className="category-container">
            <h2>Potato Chip</h2>
            <h3>
              {dataFromSandwichOptions.potatoChips.name}: $
              {dataFromSandwichOptions.potatoChips.price}
            </h3>
          </div>
        </>
        <>
          <div className="category-container">
            <h2>Beverages</h2>
            <h3>
              {dataFromSandwichOptions.beverages.name}: $
              {dataFromSandwichOptions.beverages.price}
            </h3>
          </div>
        </>
      </>
    </>
  );
}

export default Menu;

// (breadSelection, meatSelection, cheeseSelection, toppingsSelection, dressingSelection, signatureSandwiches, potatoChips,  beverages)
