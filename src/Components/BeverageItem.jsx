import beverages from "../data/beverages.js";
import "../Styles/Menu.css";

export default function BeverageItem() {
  console.log(beverages);
  return (
    <div className="all-beverages">
      {beverages.map(({ name, price }, id) => {
        return (
          <div className="beverage-container" key={id}>
            <h3>
              {name} <span> - ${price} </span>{" "}
              <button className="css-button-gradient--5">Add to Cart</button>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
