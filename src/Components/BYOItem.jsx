import listOptions from "../data/sandwichOptions.js";

export default function BYOItem() {
  console.log(BYOItem);
  return (
    <>
      <div>
        {listOptions.breadSelection.map(({ name, price }, id) => {
          return (
            <div className="options-container" key={id}>
              <h3>
                {name} <span> ${price}</span>
              </h3>
            </div>
          );
        })}
      </div>
      <>
        <div>
          {listOptions.meatSelection.map(({ name, price }, id) => {
            return (
              <div className="options-container" key={id}>
                <h3>
                  {name} <span> ${price}</span>
                </h3>
              </div>
            );
          })}
        </div>
        <>
          <div>
            {listOptions.cheeseSelection.map(({ name, price }, id) => {
              return (
                <div className="options-container" key={id}>
                  <h3>
                    {name} <span> ${price}</span>
                  </h3>
                </div>
              );
            })}
          </div>
          <>
            <div>
              {listOptions.toppingsSelection.map(({ name, price }, id) => {
                return (
                  <div className="options-container" key={id}>
                    <h3>
                      {name} <span> ${price}</span>
                    </h3>
                  </div>
                );
              })}
            </div>
            <>
              <div>
                {listOptions.dressingSelection.map(({ name, price }, id) => {
                  return (
                    <div className="options-container" key={id}>
                      <h3>
                        {name} <span> ${price}</span>
                      </h3>
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
