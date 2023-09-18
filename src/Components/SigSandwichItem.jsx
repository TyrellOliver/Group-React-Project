import signatureSandwiches from "../data/signatureSandwiches.js";
import "../Styles/Menu.css";

export default function SigSandwichItem() {
  console.log(SigSandwichItem);
  return (
    <div className="all-sandwiches">
      {signatureSandwiches.map(({ name, price, description, image }, id) => {
        // const divStyle = {
        //   backgroundImage: `url(${image})`,
        //   backgroundSize: "auto",
        //   backgroundRepeat: "no-repeat",
        // };
        return (
          <div className="sandwich-container" key={id}>
            <img src={image} id="food-image" alt={name} />
            <h3>
              {name} <span> ${price}</span>
            </h3>
            <p>{description}</p>
            <br />
          </div>
        );
      })}
    </div>
  );
}
