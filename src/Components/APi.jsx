import axios from "axios";
import { useState, useEffect } from "react";

const API = axios.create({
  baseURL: "https://api.edamam.com",
  headers: {
    "Content-Type": "application/json",
    "X-Application-ID": "164f191f",
    "X-API-Key": "7c746e2e8dc7000541345dd32c7a8b13"
  }
});

function Calories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const endpoint = "/api/nutrition-data";
    const foodItem = "bread";
    const params = {
      params: {
        app_id: "164f191f",
        app_key: "7c746e2e8dc7000541345dd32c7a8b13",
        ingr: foodItem
      }
    };

    API.get(endpoint, params)
      .then((response) => {
        const responseData = response.data.items || [];

        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calories;
