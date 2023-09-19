// const [checked, setChecked] = useState([]);
import listOptions from "../data/sandwichOptions.js";
import React, { createFactory, useState } from "react";

export default function BYOOptions() {
  console.log(BYOOptions);

  const [selectedOptions, setSelectedOptions] = useState({
    bread: null,
    meat: [],
    cheese: [],
    toppings: [],
    dressing: [],
  });

  const handleCheckboxChange = (category, name) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (category === "bread") {
        newSelectedOptions.bread = name;
      } else {
        const categoryOptions = prevSelectedOptions[category];

        if (categoryOptions.includes(name)) {
          newSelectedOptions[category] = categoryOptions.filter(
            (item) => item !== name
          );
        } else {
          newSelectedOptions[category] = [...categoryOptions.filter];
        }
      }
      return newSelectedOptions;
    });
  };

  return (
    <>
      <div>
        <h3>Bread Selection (Choose one):</h3>
        {listOptions.breadSelection.map(({ name, price }, id) => {
          return (
            <div className="options-container" key={id}>
              <h4>
                <label>
                  <input
                    type="radio"
                    name="bread"
                    value={name}
                    checked={selectedOptions.bread === name}
                    onChange={() => handleCheckboxChange("bread", name)}
                  />
                  {/* <inut value={name} type="checkbox" /> */}
                  {name} <span> ${price}</span>
                </label>
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
              <div className="options-container" key={id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptions.meat.includes(name)}
                    onChange={() => handleCheckboxChange("meat", name)}
                  />{" "}
                  <h4>
                    {name} <span> ${price}</span>
                  </h4>
                </label>
              </div>
            );
          })}
        </div>
        <>
          <div>
            <h3>Cheese Selection (Choose up to 5):</h3>
            {listOptions.cheeseSelection.map(({ name, price }, id) => {
              return (
                <div className="options-container" key={id}>
                  <h4>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedOptions.cheese.includes(name)}
                        onChange={() =>
                          handleCheckboxChange.cheese.includes(name)
                        }
                      />
                      {name} <span> ${price}</span>
                    </label>
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
                  <div className="options-container" key={id}>
                    <h4>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedOptions.dressing.includes(name)}
                          onChange={() =>
                            handleCheckboxChange("dressing", name)
                          }
                        />
                        {name} <span> ${price}</span>
                      </label>
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
                    <div className="options-container" key={id}>
                      <label>
                        <h4>
                          <input
                            type="checkbox"
                            checked={selectedOptions.dressing.includes(name)}
                            onChange={() =>
                              handleCheckboxChange("dressing", name)
                            }
                          />
                          {name} <span> ${price}</span>
                        </h4>
                      </label>
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
