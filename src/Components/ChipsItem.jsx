import potatoChips from "../data/potatoChips.js";

export default function ChipsItem() {
  console.log(potatoChips);
  return (
    <div>
      {potatoChips.map(({ name, price }, id) => {
        return (
          <div className="category-container" key={id}>
            <h3>
              {name} <span> ${price}</span>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
