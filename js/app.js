// api key

const API_KEY = `c08d3862b801fd0bc8c52cd1ed89fb07
`;

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

const displayTemperature = (data) => {
  // console.log(data.main.temp);
  const temperature = document.getElementById("temperature");
  temperature.innerText = data.main.temp;
};

loadTemperature("dhaka");
