import signatureSandwiches from "../data/signatureSandwiches.js";
import "../App.css"

export default function SigSandwichItem() {
  console.log(SigSandwichItem);
  return (
    <div className="all-sandwiches">
      {signatureSandwiches.map(({ name, price, description, image }, id) => {
        return (
          <div className="sandwich-container" key={id}>
            <h3>
              {name} <span> ${price}</span>
            </h3>
            <p>{description}</p>
            <img src={image} id="food-image" alt={name} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
