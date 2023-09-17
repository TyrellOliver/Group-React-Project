import potatoChips from "../data/potatoChips.js";

export default function ChipsItem() {
  console.log(potatoChips);
  return (
    <div className="all-chips">
      {potatoChips.map(({ name, price }, id) => {
        return (
          <div className="chips-container" key={id}>
            <h3>
              {name} <span> ${price}</span>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
