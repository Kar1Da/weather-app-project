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

//for the city choosing

let apiKeyForecast = "6f75o9ff2b2c1797a73f7cb01efdat74";
let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=New York&key=${apiKeyForecast}&units=metric`;
axios.get(apiUrlForecast).then(showWeatherImages);

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML = `${Math.round(
    response.data.main.temp
  )}°`;

  document.querySelector(
    ".humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector(".windSpeed").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector(
    ".weather"
  ).innerHTML = `${response.data.weather[0].main}(${response.data.weather[0].description})`;
}

function searchCity(city) {
  let apiKey = "b9d9369451dab612d4df9595a347fdbb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "b9d9369451dab612d4df9595a347fdbb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

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
  let firstImage = document.querySelector(".nextDayImage");
  firstImage.setAttribute("src", response.data.daily[1].condition.icon_url);

  let nextDescription = document.querySelector(".firstDesk");
  nextDescription = nextDescription.innerHTML =
    response.data.daily[1].condition.description;

  let secondImage = document.querySelector(".secondDayImage");
  secondImage.setAttribute("src", response.data.daily[2].condition.icon_url);

  let secondDescription = document.querySelector(".secondDesk");
  secondDescription = secondDescription.innerHTML =
    response.data.daily[2].condition.description;

  let thirdImage = document.querySelector(".thirdDayImage");
  thirdImage.setAttribute("src", response.data.daily[3].condition.icon_url);

  let thirdDescription = document.querySelector(".thirdDesk");
  thirdDescription = thirdDescription.innerHTML =
    response.data.daily[3].condition.description;

  let fourthImage = document.querySelector(".fourthDayImage");
  fourthImage.setAttribute("src", response.data.daily[4].condition.icon_url);

  let fourthDescription = document.querySelector(".fourthDesk");
  fourthDescription = fourthDescription.innerHTML =
    response.data.daily[4].condition.description;

  let fifthImage = document.querySelector(".fifthDayImage");
  fifthImage.setAttribute("src", response.data.daily[5].condition.icon_url);

  let fifthDescription = document.querySelector(".fifthDesk");
  fifthDescription = fifthDescription.innerHTML =
    response.data.daily[5].condition.description;

  console.log(response.data);
  console.log(response.data.daily[1].condition.icon_url);
}

//
//
//
//
//
//
//
//
//
//
//
//
let searchForm = document.querySelector("#searchCity-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector(".currentAreaButton");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
