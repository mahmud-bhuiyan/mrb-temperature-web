// api key
const API_KEY = `c08d3862b801fd0bc8c52cd1ed89fb07
`;

//fetching data using api
const loadTemperature = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayTemperature(data);
  } catch (error) {
    console.log(error);
  }
};

//showing fetched data
const displayTemperature = (data) => {
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
  // console.log(data.weather[0].main);
};

//set innerText function
const setInnerTextById = (id, text) => {
  const targetText = document.getElementById(id);
  targetText.innerText = text;
};

//search city
document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  // set city
  setInnerTextById("city", city.toUpperCase());
  loadTemperature(city);
});

loadTemperature("dhaka");
