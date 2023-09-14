import signatureSandwiches from "../data/signatureSandwiches.js";

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
            <img src={image} alt={name} />
          </div>
        );
      })}
    </div>
  );
}
//   return (
//     <>
//       <
//         <h2>Signature Sandwiches</h2>
//         <h3>
//           {signatureSandwiches.name}: ${signatureSandwiches.price}
//         </h3>
//         <p>{signatureSandwiches.description}</p>
//         <img src={signatureSandwiches.image} alt="" />
//         <button onClick={() => handleViewDetails(signatureSandwiches)}>
//           View Item
//         </button>
//       </div>
//     </>
//   );
// }
