import "./style.css";

const cityNameInput = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
const time = document.querySelector(".date-display");
const timeTiny = document.querySelector(".time");
const date = new Date();
const celciusButton = document.querySelector(".celcius");
const farenButton = document.querySelector(".faren");

let selectedMeasure = 0;
let displayed = false;

const cityButton = document.querySelectorAll(".common-city");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let windDirections = {
  N: [350, 360, 10],
  NNE: [20, 30],
  NE: [40, 50],
  ENE: [60, 70],
  E: [80, 90, 100],
  ESE: [110, 120],
  SE: [130, 140],
  SSE: [150, 160],
  S: [170, 180, 190],
  SSW: [200, 210],
  SW: [220, 230],
  WSW: [240, 250],
  W: [260, 270, 280],
  WNW: [290, 300],
  NW: [310, 320],
  NNW: [330, 340],
};

let day = days[date.getDay()];

let dateString = day + ", ";

time.innerHTML = dateString;

searchButton.addEventListener("click", () => {
  let value = cityNameInput.value;
  let weather = weatherAtLocation(value);
  let data = weather.then((results) => {
    console.log(results);
    return results.json();
  });
  weather.catch((err) => {
    console.log("error");
  });
  displayData(data);
});

cityButton.forEach((element) => {
  element.addEventListener("click", () => {
    let cityText = element.querySelector(".city-text");
    let weather = weatherAtLocation(cityText.innerHTML);
    let data = weather.then((results) => {
      console.log(results);
      return results.json();
    });
    weather.catch((err) => {
      console.log("error");
    });
    displayData(data);
  });
});

celciusButton.addEventListener("click", () => {
  if (displayed) {
    if (!selectedMeasure == 1) {
      selectedMeasure = 1;
      celciusButton.style.color = "white";
      celciusButton.style.backgroundColor = "black";

      const temp = document.querySelector(".temp-display");
      const feelTemp = document.querySelector(".feel-temp");
      console.log(temp.innerHTML.match(/\d+/)[0]);
      temp.innerHTML =
        Math.round((temp.innerHTML.match(/\d+/)[0] - 32) * (5 / 9)) + "°C";

      feelTemp.innerHTML =
        Math.round((feelTemp.innerHTML.match(/\d+/)[0] - 32) * (5 / 9)) + "°C";
      farenButton.style.color = "black";
      farenButton.style.backgroundColor = "white";
    } else {
    }
  } else {
    if (!selectedMeasure == 1) {
      selectedMeasure = 1;
      const tempDisplay = document.querySelector(".temp-display");
      const feelTemp = document.querySelector(".feel-temp");
      tempDisplay.innerHTML = "--°C";
      feelTemp.innerHTML = "--°C";

      celciusButton.style.color = "white";
      celciusButton.style.backgroundColor = "black";

      farenButton.style.color = "black";
      farenButton.style.backgroundColor = "white";
    }
  }
});

farenButton.addEventListener("click", () => {
  if (displayed) {
    if (!selectedMeasure == 0) {
      selectedMeasure = 0;
      farenButton.style.color = "white";
      farenButton.style.backgroundColor = "black";

      celciusButton.style.color = "black";
      celciusButton.style.backgroundColor = "white";
      selectedMeasure = 0;
      const temp = document.querySelector(".temp-display");
      const feelTemp = document.querySelector(".feel-temp");
      console.log(temp.innerHTML.match(/\d+/)[0]);
      temp.innerHTML =
        Math.round(temp.innerHTML.match(/\d+/)[0] * 1.8 + 32) + "°F";

      feelTemp.innerHTML =
        Math.round(feelTemp.innerHTML.match(/\d+/)[0] * 1.8 + 32) + "°F";
    }
  } else {
    if (!selectedMeasure == 0) {
      selectedMeasure = 0;
      const tempDisplay = document.querySelector(".temp-display");
      const feelTemp = document.querySelector(".feel-temp");
      tempDisplay.innerHTML = "--°F";
      feelTemp.innerHTML = "--°F";

      celciusButton.style.color = "black";
      celciusButton.style.backgroundColor = "white";

      farenButton.style.color = "white";
      farenButton.style.backgroundColor = "black";
    }
  }
});

function displayData(info) {
  displayed = true;
  info.then((results) => {
    const condition = document.querySelector(".condition-text");
    const city = document.querySelector(".location-name");
    const temp = document.querySelector(".temp-display");
    const icon = document.querySelectorAll(".condition-icon")[1];
    const bigIcon = document.querySelector("#weather-icon");
    const feelTemp = document.querySelector(".feel-temp");
    const feelSay = document.querySelector(".feel-say");
    const feelIcon = document.querySelector(".feel-say-icon");
    const feelWrapper = document.querySelector(".say-wrapper");
    const humidity = document.querySelector(".humid-percentage");
    const visibility = document.querySelector(".visible-length");
    const timeZone = document.querySelector(".timezone-text");
    const windSpeed = document.querySelector(".wind-speed");
    const windText = document.querySelector(".wind-direction-text");
    const sunriseText = document.querySelector(".sun-rise-text");
    const sunsetText = document.querySelector(".sun-set-text");

    let unix_timestamp = results.dt;
    let tz = results.timezone;
    let tzInMins = tz / 100;

    let date = new Date((unix_timestamp + tzInMins) * 1000);

    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();

    let formattedTime = hours + ":" + minutes.substr(-2);

    let sunriseTime = new Date(results.sys.sunrise * 1000);
    let srHours = sunriseTime.getHours();
    let srMins = "0" + sunriseTime.getMinutes();

    let formattedSR = srHours + ":" + srMins.substr(-2);

    let sunsetTime = new Date(results.sys.sunset * 1000);
    let ssHours = sunsetTime.getHours();
    let ssMins = "0" + sunsetTime.getMinutes();

    let formattedSS = srHours + ":" + ssMins.substr(-2);

    if (unix_timestamp <= results.sys.sunrise) {
      bigIcon.src = "../src/assets/crescent-moon.png";
    } else {
      bigIcon.src = "../src/assets/sun.png";
    }
    console.log(results);

    icon.src =
      "http://openweathermap.org/img/w/" + results.weather[0].icon + ".png";
    time.innerHTML = dateString + formattedTime;
    temp.innerHTML = Math.trunc((results.main.temp - 273.15) * 1.8 + 32) + "°F";
    city.innerHTML = results.name + ", " + results.sys.country;
    condition.innerHTML = results.weather[0].main;
    humidity.innerHTML = results.main.humidity + "%";
    visibility.innerHTML =
      Math.round(results.visibility / 1000 / 1.609) + " mi.";

    timeZone.innerHTML = results.clouds.all + "%";
    windSpeed.innerHTML = Math.round(results.wind.speed) + " mph";
    for (let e in windDirections) {
      windDirections[e].forEach((i) => {
        if (results.wind.deg == i) {
          windText.innerHTML = e;
        }
      });
    }
    sunriseText.innerHTML = formattedSR;
    sunsetText.innerHTML = formattedSS;

    if (selectedMeasure == 0) {
      temp.innerHTML =
        Math.trunc((results.main.temp - 273.15) * 1.8 + 32) + "°F";
      feelTemp.innerHTML =
        Math.trunc((results.main.feels_like - 273.15) * 1.8 + 32) + "°F";

      if (Math.trunc((results.main.feels_like - 273.15) * 1.8 + 32) <= 60) {
        console.log("test");
        feelSay.innerHTML = "Cold";
        let children = Array.from(feelIcon.childNodes);
        console.log(children);
        children[0].className = "fa-solid fa-snowflake";
      } else {
        console.log("test");
        feelSay.innerHTML = "Hot";
        let children = Array.from(feelIcon.childNodes);
        console.log(children);
        children[0].className = "fa fa-sun-o";
      }
    } else {
      temp.innerHTML = Math.trunc(results.main.temp - 273.15) + "°C";
      feelTemp.innerHTML = Math.trunc(results.main.feels_like - 273.15) + "°C";

      if (Math.trunc(results.main.feels_like - 273.15) <= 16) {
        console.log("test");
        feelSay.innerHTML = "Cold";
        let children = Array.from(feelIcon.childNodes);
        console.log(children);
        children[0].className = "fa-solid fa-snowflake";
      } else {
        console.log("test");
        feelSay.innerHTML = "Hot";
        let children = Array.from(feelIcon.childNodes);
        console.log(children);
        children[0].className = "fa fa-sun-o";
      }
    }
  });
  info.catch((err) => {
    cityNameInput.style.borderBottom = "red 1px solid";
  });
}

async function weatherAtLocation(location) {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        location +
        "&APPID=7c2be3625138afc41ec0634a75c8d76e"
    );

    return response;
  } catch {}
}
