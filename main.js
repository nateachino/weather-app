/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const cityNameInput = document.querySelector(\".search-bar\");\r\nconst searchButton = document.querySelector(\".search-button\");\r\nconst time = document.querySelector(\".date-display\");\r\nconst timeTiny = document.querySelector(\".time\");\r\nconst date = new Date();\r\nconst celciusButton = document.querySelector(\".celcius\");\r\nconst farenButton = document.querySelector(\".faren\");\r\n\r\nlet selectedMeasure = 0;\r\nlet displayed = false;\r\n\r\nconst cityButton = document.querySelectorAll(\".common-city\");\r\n\r\nconst days = [\r\n  \"Sunday\",\r\n  \"Monday\",\r\n  \"Tuesday\",\r\n  \"Wednesday\",\r\n  \"Thursday\",\r\n  \"Friday\",\r\n  \"Saturday\",\r\n];\r\n\r\nlet windDirections = {\r\n  N: [350, 360, 10],\r\n  NNE: [20, 30],\r\n  NE: [40, 50],\r\n  ENE: [60, 70],\r\n  E: [80, 90, 100],\r\n  ESE: [110, 120],\r\n  SE: [130, 140],\r\n  SSE: [150, 160],\r\n  S: [170, 180, 190],\r\n  SSW: [200, 210],\r\n  SW: [220, 230],\r\n  WSW: [240, 250],\r\n  W: [260, 270, 280],\r\n  WNW: [290, 300],\r\n  NW: [310, 320],\r\n  NNW: [330, 340],\r\n};\r\n\r\nlet day = days[date.getDay()];\r\n\r\nlet dateString = day + \", \";\r\n\r\ntime.innerHTML = dateString;\r\n\r\nsearchButton.addEventListener(\"click\", () => {\r\n  let value = cityNameInput.value;\r\n  let weather = weatherAtLocation(value);\r\n  let data = weather.then((results) => {\r\n    console.log(results);\r\n    return results.json();\r\n  });\r\n  weather.catch((err) => {\r\n    console.log(\"error\");\r\n  });\r\n  displayData(data);\r\n});\r\n\r\ncityButton.forEach((element) => {\r\n  element.addEventListener(\"click\", () => {\r\n    let cityText = element.querySelector(\".city-text\");\r\n    let weather = weatherAtLocation(cityText.innerHTML);\r\n    let data = weather.then((results) => {\r\n      console.log(results);\r\n      return results.json();\r\n    });\r\n    weather.catch((err) => {\r\n      console.log(\"error\");\r\n    });\r\n    displayData(data);\r\n  });\r\n});\r\n\r\ncelciusButton.addEventListener(\"click\", () => {\r\n  if (displayed) {\r\n    selectedMeasure = 1;\r\n    celciusButton.style.color = \"white\";\r\n    celciusButton.style.backgroundColor = \"black\";\r\n\r\n    const temp = document.querySelector(\".temp-display\");\r\n    const feelTemp = document.querySelector(\".feel-temp\");\r\n    console.log(temp.innerHTML.match(/\\d+/)[0]);\r\n    temp.innerHTML =\r\n      Math.round((temp.innerHTML.match(/\\d+/)[0] - 32) * (5 / 9)) + \"°C\";\r\n\r\n    feelTemp.innerHTML =\r\n      Math.round((feelTemp.innerHTML.match(/\\d+/)[0] - 32) * (5 / 9)) + \"°C\";\r\n    farenButton.style.color = \"white\";\r\n    farenButton.style.backgroundColor = \"black\";\r\n  } else {\r\n    selectedMeasure = 1;\r\n    const tempDisplay = document.querySelector(\".temp-display\");\r\n    const feelTemp = document.querySelector(\".feel-temp\");\r\n    tempDisplay.innerHTML = \"--°C\";\r\n    feelTemp.innerHTML = \"--°C\";\r\n\r\n    celciusButton.style.color = \"white\";\r\n    celciusButton.style.backgroundColor = \"black\";\r\n\r\n    farenButton.style.color = \"black\";\r\n    farenButton.style.backgroundColor = \"white\";\r\n  }\r\n});\r\n\r\nfarenButton.addEventListener(\"click\", () => {\r\n  if (displayed) {\r\n    farenButton.style.color = \"white\";\r\n    farenButton.style.backgroundColor = \"black\";\r\n    celciusButton.style.color = \"black\";\r\n    celciusButton.style.backgroundColor = \"white\";\r\n    selectedMeasure = 0;\r\n    const temp = document.querySelector(\".temp-display\");\r\n    const feelTemp = document.querySelector(\".feel-temp\");\r\n    console.log(temp.innerHTML.match(/\\d+/)[0]);\r\n    temp.innerHTML =\r\n      Math.round(temp.innerHTML.match(/\\d+/)[0] * 1.8 + 32) + \"°F\";\r\n\r\n    feelTemp.innerHTML =\r\n      Math.round(feelTemp.innerHTML.match(/\\d+/)[0] * 1.8 + 32) + \"°F\";\r\n  } else {\r\n    selectedMeasure = 0;\r\n    const tempDisplay = document.querySelector(\".temp-display\");\r\n    const feelTemp = document.querySelector(\".feel-temp\");\r\n    tempDisplay.innerHTML = \"--°F\";\r\n    feelTemp.innerHTML = \"--°F\";\r\n\r\n    celciusButton.style.color = \"black\";\r\n    celciusButton.style.backgroundColor = \"white\";\r\n\r\n    farenButton.style.color = \"white\";\r\n    farenButton.style.backgroundColor = \"black\";\r\n  }\r\n});\r\n\r\nfunction displayData(info) {\r\n  displayed = true;\r\n  info.then((results) => {\r\n    const condition = document.querySelector(\".condition-text\");\r\n    const city = document.querySelector(\".location-name\");\r\n    const temp = document.querySelector(\".temp-display\");\r\n    const icon = document.querySelectorAll(\".condition-icon\")[1];\r\n    const bigIcon = document.querySelector(\"#weather-icon\");\r\n    const feelTemp = document.querySelector(\".feel-temp\");\r\n    const feelSay = document.querySelector(\".feel-say\");\r\n    const feelIcon = document.querySelector(\".feel-say-icon\");\r\n    const feelWrapper = document.querySelector(\".say-wrapper\");\r\n    const humidity = document.querySelector(\".humid-percentage\");\r\n    const visibility = document.querySelector(\".visible-length\");\r\n    const timeZone = document.querySelector(\".timezone-text\");\r\n    const windSpeed = document.querySelector(\".wind-speed\");\r\n    const windText = document.querySelector(\".wind-direction-text\");\r\n    const sunriseText = document.querySelector(\".sun-rise-text\");\r\n    const sunsetText = document.querySelector(\".sun-set-text\");\r\n\r\n    let unix_timestamp = results.dt;\r\n    let tz = results.timezone;\r\n    let tzInMins = tz / 100;\r\n\r\n    let date = new Date((unix_timestamp + tzInMins) * 1000);\r\n\r\n    let hours = date.getHours();\r\n    let minutes = \"0\" + date.getMinutes();\r\n\r\n    let formattedTime = hours + \":\" + minutes.substr(-2);\r\n\r\n    let sunriseTime = new Date(results.sys.sunrise * 1000);\r\n    let srHours = sunriseTime.getHours();\r\n    let srMins = \"0\" + sunriseTime.getMinutes();\r\n\r\n    let formattedSR = srHours + \":\" + srMins.substr(-2);\r\n\r\n    let sunsetTime = new Date(results.sys.sunset * 1000);\r\n    let ssHours = sunsetTime.getHours();\r\n    let ssMins = \"0\" + sunsetTime.getMinutes();\r\n\r\n    let formattedSS = srHours + \":\" + ssMins.substr(-2);\r\n\r\n    if (unix_timestamp <= results.sys.sunrise) {\r\n      bigIcon.src = \"../src/assets/crescent-moon.png\";\r\n    } else {\r\n      bigIcon.src = \"../src/assets/sun.png\";\r\n    }\r\n    console.log(results);\r\n\r\n    icon.src =\r\n      \"http://openweathermap.org/img/w/\" + results.weather[0].icon + \".png\";\r\n    time.innerHTML = dateString + formattedTime;\r\n    temp.innerHTML = Math.trunc((results.main.temp - 273.15) * 1.8 + 32) + \"°F\";\r\n    city.innerHTML = results.name + \", \" + results.sys.country;\r\n    condition.innerHTML = results.weather[0].main;\r\n    humidity.innerHTML = results.main.humidity + \"%\";\r\n    visibility.innerHTML =\r\n      Math.round(results.visibility / 1000 / 1.609) + \" mi.\";\r\n\r\n    timeZone.innerHTML = results.clouds.all + \"%\";\r\n    windSpeed.innerHTML = Math.round(results.wind.speed) + \" mph\";\r\n    for (let e in windDirections) {\r\n      windDirections[e].forEach((i) => {\r\n        if (results.wind.deg == i) {\r\n          windText.innerHTML = e;\r\n        }\r\n      });\r\n    }\r\n    sunriseText.innerHTML = formattedSR;\r\n    sunsetText.innerHTML = formattedSS;\r\n\r\n    if (selectedMeasure == 0) {\r\n      temp.innerHTML =\r\n        Math.trunc((results.main.temp - 273.15) * 1.8 + 32) + \"°F\";\r\n      feelTemp.innerHTML =\r\n        Math.trunc((results.main.feels_like - 273.15) * 1.8 + 32) + \"°F\";\r\n\r\n      if (Math.trunc((results.main.feels_like - 273.15) * 1.8 + 32) <= 60) {\r\n        console.log(\"test\");\r\n        feelSay.innerHTML = \"Cold\";\r\n        let children = Array.from(feelIcon.childNodes);\r\n        console.log(children);\r\n        children[0].className = \"fa-solid fa-snowflake\";\r\n      } else {\r\n        console.log(\"test\");\r\n        feelSay.innerHTML = \"Hot\";\r\n        let children = Array.from(feelIcon.childNodes);\r\n        console.log(children);\r\n        children[0].className = \"fa fa-sun-o\";\r\n      }\r\n    } else {\r\n      temp.innerHTML = Math.trunc(results.main.temp - 273.15) + \"°C\";\r\n      feelTemp.innerHTML = Math.trunc(results.main.feels_like - 273.15) + \"°C\";\r\n\r\n      if (Math.trunc(results.main.feels_like - 273.15) <= 16) {\r\n        console.log(\"test\");\r\n        feelSay.innerHTML = \"Cold\";\r\n        let children = Array.from(feelIcon.childNodes);\r\n        console.log(children);\r\n        children[0].className = \"fa-solid fa-snowflake\";\r\n      } else {\r\n        console.log(\"test\");\r\n        feelSay.innerHTML = \"Hot\";\r\n        let children = Array.from(feelIcon.childNodes);\r\n        console.log(children);\r\n        children[0].className = \"fa fa-sun-o\";\r\n      }\r\n    }\r\n  });\r\n  info.catch((err) => {\r\n    cityNameInput.style.borderBottom = \"red 1px solid\";\r\n  });\r\n}\r\n\r\nasync function weatherAtLocation(location) {\r\n  try {\r\n    const response = await fetch(\r\n      \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n        location +\r\n        \"&APPID=7c2be3625138afc41ec0634a75c8d76e\"\r\n    );\r\n\r\n    return response;\r\n  } catch {}\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;