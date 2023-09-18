import signatureSandwiches from "../data/signatureSandwiches.js";
import "../App.css";
import "./sandwichDetails.css";

export default function SigSandwichItem() {
  console.log(SigSandwichItem);
  return (
    <div>
      {signatureSandwiches.map(({ name, price, description, image }, id) => {
        return (
          <div className="category-container" key={id}>
            <h3>
              {name} <span> - ${price}</span>{" "}
              <button className="css-button-gradient--5">Add to Cart</button>
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

// const SigSandwichItem = ({ signatureSandwiches }) => {
//   console.log(SigSandwichItem);
//   return (
//     <div className="signature-sandwiches">
//       {signatureSandwiches.map((item) => (
//         <div className="sandwich-card">
//           <div>
//             <img
//               className="sandwich-image"
//               src={signatureSandwiches.image}
//               alt={signatureSandwiches.name}
//             />
//           </div>

//           <div>
//             <h4 className="sandwich.name">{signatureSandwiches.name}</h4>
//           </div>
//           <div className="sandwich-price"> ${signatureSandwiches.price}</div>

//           <div>
//             <button className="sandwich-add-button">Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SigSandwichItem;
