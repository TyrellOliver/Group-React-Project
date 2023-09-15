import beverages from "../data/beverages.js";

export default function BeverageItem() {
  console.log(beverages);
  return (
    <div>
      {beverages.map(({ name, price }, id) => {
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