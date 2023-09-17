
import axios from 'axios';
import {useState, useEffect} from "react";



const API_URL = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser';

const API_KEY = '1bf230826dmsh4f445e35b8cd314p13aae8jsn67230786dbbf';

const options = {
  method: 'GET',
  url: API_URL,
  params: {
    'nutrition-type': 'cooking',
    'category[0]': 'generic-foods',
    'health[0]': 'alcohol-free'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};

function FoodData() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setApiData(response.data); // Store API response data in state
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {apiData && apiData.hints ? (
          apiData.hints.map((hint, index) => (
            <li key={index}>
              <strong>Name:</strong> {hint.food.label} <br />
              <strong>Category:</strong> {hint.food.category} <br />
        
            </li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
  
}

export default FoodData;
