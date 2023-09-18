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
              {name} <span> - ${price}</span>{" "}
              <button className="css-button-gradient--5">Add to Cart</button>
            </h3>
            <p>{description}</p>
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
