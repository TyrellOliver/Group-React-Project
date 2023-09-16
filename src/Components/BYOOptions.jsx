// const [checked, setChecked] = useState([]);
import listOptions from "../data/sandwichOptions.js";

export default function BYOOptions() {
  console.log(BYOOptions);
  return (
    <>
      <div>
        <h3>Bread Selection (Choose one):</h3>
        {listOptions.breadSelection.map(({ name, price }, id) => {
          return (
            <div className="bread-container" key={id}>
              <h4>
                {/* <inut value={name} type="checkbox" /> */}
                {name} <span> ${price}</span>
              </h4>
            </div>
          );
        })}
      </div>
      <>
        <div>
          <h3>Meat Selection (Choose up to 10):</h3>
          {listOptions.meatSelection.map(({ name, price }, id) => {
            return (
              <div className="meats-container" key={id}>
                <h4>
                  {name} <span> ${price}</span>
                </h4>
              </div>
            );
          })}
        </div>
        <>
          <div>
            <h3>Cheese Selection (Choose up to 5):</h3>
            {listOptions.cheeseSelection.map(({ name, price }, id) => {
              return (
                <div className="cheese-container" key={id}>
                  <h4>
                    {name} <span> ${price}</span>
                  </h4>
                </div>
              );
            })}
          </div>
          <>
            <div>
              <h3>Toppings Selection (Choose up to 10):</h3>
              {listOptions.toppingsSelection.map(({ name, price }, id) => {
                return (
                  <div className="toppings-container" key={id}>
                    <h4>
                      {name} <span> ${price}</span>
                    </h4>
                  </div>
                );
              })}
            </div>
            <>
              <div>
                <h3>Dressing Selection (Choose up to 5):</h3>
                {listOptions.dressingSelection.map(({ name, price }, id) => {
                  return (
                    <div className="dressings-container" key={id}>
                      <h4>
                        {name} <span> ${price}</span>
                      </h4>
                    </div>
                  );
                })}
              </div>
            </>
          </>
        </>
      </>
    </>
  );
}
