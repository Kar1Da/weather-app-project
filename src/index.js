//For the day
let now = new Date();
console.log(now);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let todaysDayOfTheWeek = days[now.getDay()];
let todaysDay = document.querySelector(".today");
todaysDay.innerHTML = todaysDayOfTheWeek;

let tommorow = days[now.getDay() + 1];
let selectorOne = document.querySelector(".tomorrow");
selectorOne.innerHTML = tommorow;

let afterTommorow = days[now.getDay() + 2];
let selectorTwo = document.querySelector(".nextDayOne");
selectorTwo.innerHTML = afterTommorow;

let nextDay = days[now.getDay() + 3];
let selectorThree = document.querySelector(".nextDayTwo");
selectorThree.innerHTML = nextDay;

let nextDayTwo = days[now.getDay() + 4];
let selectorFour = document.querySelector(".nextDayThree");
selectorFour.innerHTML = nextDayTwo;

let nextDayThree = days[now.getDay() + 5];
let selectorFive = document.querySelector(".nextDayFour");
selectorFive.innerHTML = nextDayThree;

//for the time
let todaysTime = document.querySelector(".time");
let hours = now.getHours();
let minutes = now.getMinutes();
minutes = minutes <= 9 ? "0" + minutes : minutes;
todaysTime.innerHTML = `${hours}:${minutes}`;

//for the main content

function displayWeatherCondition(response) {
  celsiusTemperature = response.data.temperature.current;

  if (response.data.city === undefined) {
    document.querySelector("#city").innerHTML = `Can't find this location`;
    document.querySelector("#degrees").innerHTML = `?`;
    alert(`If you have this issue, you're probably :
    1. Misspelled the city name;
    2. Wrote a non-exicting place;
    3. Have problems with Wi-Fi connection or server;
    If you have any questions please contact this email : weather.4cast@gmail.com`);
  } else {
    document.querySelector("#city").innerHTML = response.data.city;
    document.querySelector("#degrees").innerHTML = `${Math.round(
      celsiusTemperature
    )}°`;

    document.querySelector(
      ".humidity"
    ).innerHTML = `${response.data.temperature.humidity}%`;
    document.querySelector(".windSpeed").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector(
      ".weather"
    ).innerHTML = `${response.data.condition.description}`;
  }

  // console.log(response.data);
}

function searchCity(city) {
  let apiKey = "6f75o9ff2b2c1797a73f7cb01efdat74";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(response) {
  let apiKey = "6f75o9ff2b2c1797a73f7cb01efdat74";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${response.coords.latitude}&lon=${response.coords.longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

/* function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  console.log(response.data.temperature.current);
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
} */

/* function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}

function time() {
  let dateElement = document.querySelector(".time");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
} */

/* let apiKey = "6f75o9ff2b2c1797a73f7cb01efdat74";
let city = "Canberra";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showWeatherImages); */

function showWeatherImages(response) {
  if (response.data.city === undefined) {
    document.querySelector("#city").innerHTML = `Can't find this location`;
  } else {
    //
    let firstImage = document.querySelector(".nextDayImage");
    firstImage.setAttribute("src", response.data.daily[1].condition.icon_url);

    let nextDescription = document.querySelector(".firstDesk");
    nextDescription = nextDescription.innerHTML =
      response.data.daily[1].condition.description;

    let nextTempMax = document.querySelector(".tomorrowTempMax");
    nextTempMax = nextTempMax.innerHTML = `${Math.round(
      response.data.daily[1].temperature.maximum
    )}°/`;

    console.log(Math.round(response.data.daily[1].temperature.maximum));

    let nextTempMin = document.querySelector(".tomorrowTempMin");
    nextTempMin = nextTempMin.innerHTML = `${Math.round(
      response.data.daily[1].temperature.minimum
    )}°`;
    //
    let secondImage = document.querySelector(".secondDayImage");
    secondImage.setAttribute("src", response.data.daily[2].condition.icon_url);

    let secondDescription = document.querySelector(".secondDesk");
    secondDescription = secondDescription.innerHTML =
      response.data.daily[2].condition.description;

    let dayTwoTempMax = document.querySelector(".dayTwoTempMax");
    dayTwoTempMax = dayTwoTempMax.innerHTML = `${Math.round(
      response.data.daily[2].temperature.maximum
    )}°/`;

    let dayTwoTempMin = document.querySelector(".dayTwoTempMin");
    dayTwoTempMin = dayTwoTempMin.innerHTML = `${Math.round(
      response.data.daily[2].temperature.minimum
    )}°`;
    //
    let thirdImage = document.querySelector(".thirdDayImage");
    thirdImage.setAttribute("src", response.data.daily[3].condition.icon_url);

    let thirdDescription = document.querySelector(".thirdDesk");
    thirdDescription = thirdDescription.innerHTML =
      response.data.daily[3].condition.description;

    let dayThreeTempMax = document.querySelector(".dayThreeTempMax");
    dayThreeTempMax = dayThreeTempMax.innerHTML = `${Math.round(
      response.data.daily[3].temperature.maximum
    )}°/`;

    let dayThreeTempMin = document.querySelector(".dayThreeTempMin");
    dayThreeTempMin = dayThreeTempMin.innerHTML = `${Math.round(
      response.data.daily[3].temperature.minimum
    )}°`;

    //
    let fourthImage = document.querySelector(".fourthDayImage");
    fourthImage.setAttribute("src", response.data.daily[4].condition.icon_url);

    let fourthDescription = document.querySelector(".fourthDesk");
    fourthDescription = fourthDescription.innerHTML =
      response.data.daily[4].condition.description;

    let dayFourTempMax = document.querySelector(".dayFourTempMax");
    dayFourTempMax = dayFourTempMax.innerHTML = `${Math.round(
      response.data.daily[4].temperature.maximum
    )}°/`;

    let dayFourTempMin = document.querySelector(".dayFourTempMin");
    dayFourTempMin = dayFourTempMin.innerHTML = `${Math.round(
      response.data.daily[2].temperature.minimum
    )}°`;

    //
    let fifthImage = document.querySelector(".fifthDayImage");
    fifthImage.setAttribute("src", response.data.daily[5].condition.icon_url);

    let fifthDescription = document.querySelector(".fifthDesk");
    fifthDescription = fifthDescription.innerHTML =
      response.data.daily[5].condition.description;
  }

  let dayFiveTempMax = document.querySelector(".dayFiveTempMax");
  dayFiveTempMax = dayFiveTempMax.innerHTML = `${Math.round(
    response.data.daily[5].temperature.maximum
  )}°/`;

  let dayFiveTempMin = document.querySelector(".dayFiveTempMin");
  dayFiveTempMin = dayFiveTempMin.innerHTML = `${Math.round(
    response.data.daily[5].temperature.minimum
  )}°`;

  //
  console.log(response);
}

function getWeatherData(cityValue) {
  let apiKeyForecast = "6f75o9ff2b2c1797a73f7cb01efdat74";
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${cityValue}&key=${apiKeyForecast}&units=metric`;
  axios.get(apiUrlForecast).then(showWeatherImages);
}

function forecastValue(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#city-input").value;
  getWeatherData(cityValue);
}

let forecastActive = document.querySelector("#searchCity-form");
forecastActive.addEventListener("submit", forecastValue);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degrees");

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)}°`;
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degrees");
  temperatureElement.innerHTML = `${Math.round(celsiusTemperature)}°`;
}

let fahrenheitUnit = document.querySelector("#fahrenheit");
fahrenheitUnit.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let celsiusTemperature = null;

getWeatherData("Canberra");

let searchForm = document.querySelector("#searchCity-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector(".currentAreaButton");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Canberra");
