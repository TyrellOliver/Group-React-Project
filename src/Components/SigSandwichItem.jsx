import signatureSandwiches from "../data/signatureSandwiches.js";
import "./sandwichDetails.css";

export default function SigSandwichItem() {
  console.log(SigSandwichItem);
  return (
    <div>
      {signatureSandwiches.map(({ name, price, description, image }, id) => {
        return (
          <div className="category-container" key={id}>
            <h3>
              {name} <span> ${price}</span>
            </h3>
            <p>{description}</p>
            <img className="sandwich-images" src={image} alt={name} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
