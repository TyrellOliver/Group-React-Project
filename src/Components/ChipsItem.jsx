import potatoChips from "../data/potatoChips.js";
import "../Styles/Menu.css";

export default function ChipsItem() {
  console.log(potatoChips);
  return (
    <div className="all-chips">
      {potatoChips.map(({ name, price }, id) => {
        return (
          <div className="chips-container" key={id}>
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
