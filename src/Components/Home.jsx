import NavBar from "./NavBar";
import SandwichDetails from "./SandwichDetails";
import "./sandwichDetails.css";

const Home = () => {

    const signatureSandwiches = [
        {
          id: "ss-01",
          name: "Jackal Sandwich",
          description:
            "Boar's Head Cap-Off Top Round Pastrami, Feta and Provolone Cheese, Avocado, Pickles, Banana Peppers, Mixed Greens, Pesto and Honey Mustard on Slice Whole Wheat Bread.",
          price: 12.99,
          image: "Jackal-Sandwich.jpg"
        },
        {
          id: "ss-02",
          name: "Daryn's' Club",
          description:
            "Boar's Head Ovengold Roasted Turkey Breast, Thick-Cut Applewood Bacon, Lettuce, Sliced Tomato and Mayo on a Hero.",
          price: 8.99,
          image: "Daryn's-Club.jpg"
        },
        {
          id: "ss-03",
          name: "Tyrell's Turkey Sandwich",
          description:
            "Boar's Head Ovengold Roasted Turkey Breast, Boar's Head Maple Glazed Honey Turkey Breast, Boar's Head Baby Swiss, Sliced Red Onion and Mayo on Sliced Whole Wheat Bread.",
          price: 11.49,
          image: "Tyrell's-Turkey-Sandwich.jpg"
        },
        {
          id: "ss-04",
          name: "Rico's B-B-Q Honey Ham Sandwich",
          description:
            "Boar's Head Maple Glazed Honey Coat Ham, Boar's Head Vermont Yellow Cheddar, Lettuce, Sliced Tomato and Red Onion, Bread & Butter Pickles and BBQ Sauce on a Keysor Roll.",
          price: 6.79,
          image: "Rico's-B-B-Q-Honey-Ham-Sandwich.jpg"
        }
      ];

  return (
    <>

      <header>
        <NavBar />
      </header>

      <form>
        <label>
          <input type="text" name="" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <h1>Our Menu</h1>
      <div className="sandwich-container">
        {signatureSandwiches.map((sandwich, index) => (
          <SandwichDetails
            key={index}
            id={sandwich.id}
            name={sandwich.name}
            description={sandwich.description}
            price={sandwich.price}
            image={sandwich.image}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
