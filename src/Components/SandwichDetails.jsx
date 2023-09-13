import "./sandwichDetails.css"

const SandwichDetails = ({ name, description, price, image }) => {
    return (
        <div className="sandwich">
          <img src={image} alt={`image of ${name}`} />
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Price: {price}</p>
        </div>
      );
    };
    

export default  SandwichDetails;