import potatoChips from "../data/potatoChips.js";

export default function ChipsItem() {
  console.log(potatoChips);
  return (
    <div>
      {potatoChips.map(({ name, price }, id) => {
        return (
          <div className="category-container" key={id}>
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
