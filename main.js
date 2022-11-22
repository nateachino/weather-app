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

eval("const cityNameInput = document.querySelector(\".search-bar\");\r\nconst searchButton = document.querySelector(\".search-button\");\r\nconst time = document.querySelector(\".date-display\");\r\nconst timeTiny = document.querySelector(\".time\");\r\nconst date = new Date();\r\n\r\nconst days = [\r\n  \"Sunday\",\r\n  \"Monday\",\r\n  \"Tuesday\",\r\n  \"Wednesday\",\r\n  \"Thursday\",\r\n  \"Friday\",\r\n  \"Saturday\",\r\n];\r\n\r\nlet day = days[date.getDay()];\r\n\r\nlet dateString = day + \", \";\r\n\r\ntime.innerHTML = dateString;\r\n\r\nsearchButton.addEventListener(\"click\", () => {\r\n  let value = cityNameInput.value;\r\n  let weather = weatherAtLocation(value);\r\n  let data = weather.then((results) => {\r\n    console.log(results);\r\n    return results.json();\r\n  });\r\n  weather.catch((err) => {\r\n    console.log(\"error\");\r\n  });\r\n  displayData(data);\r\n});\r\n\r\nfunction displayData(info) {\r\n  info.then((results) => {\r\n    const condition = document.querySelector(\".condition-text\");\r\n    const city = document.querySelector(\".location-name\");\r\n    const temp = document.querySelector(\".temp-display\");\r\n    const rainMeter = document.querySelector(\".rain-text\");\r\n    const icon = document.querySelector(\".weather-icon\");\r\n\r\n    let unix_timestamp = results.dt;\r\n\r\n    let date = new Date(unix_timestamp * 1000);\r\n    let hours = date.getHours();\r\n    let minutes = \"0\" + date.getMinutes();\r\n    let seconds = \"0\" + date.getSeconds();\r\n\r\n    let formattedTime = hours + \":\" + minutes.substr(-2);\r\n\r\n    console.log(\r\n      \"http://openweathermap.org/img/w/\" + results.weather[0].icon + \".png\"\r\n    );\r\n\r\n    console.log(results);\r\n\r\n    icon.src =\r\n      \"http://openweathermap.org/img/w/\" + results.weather[0].icon + \".png\";\r\n    rainMeter.innerHTML = \"Rain - \" + results.rain;\r\n    time.innerHTML = dateString + formattedTime;\r\n    temp.innerHTML = Math.trunc((results.main.temp - 273.15) * 1.8 + 32) + \"°F\";\r\n    city.innerHTML = results.name + \", \" + results.sys.country;\r\n    condition.innerHTML = results.weather[0].main;\r\n  });\r\n  info.catch((err) => {\r\n    console.log(err);\r\n  });\r\n}\r\n\r\nasync function weatherAtLocation(location) {\r\n  try {\r\n    const response = await fetch(\r\n      \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n        location +\r\n        \"&APPID=7c2be3625138afc41ec0634a75c8d76e\"\r\n    );\r\n\r\n    return response;\r\n  } catch {\r\n    console.log(\"failed\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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