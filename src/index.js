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

  windSpeed = response.data.wind.speed;

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
    document.querySelector(".windSpeed").innerHTML = `${Math.round(
      windSpeed
    )}km/h`;
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
  // console.log(response);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function displayForecastCurrentArea(response) {
  let apiKey = "6f75o9ff2b2c1797a73f7cb01efdat74";
  let lat = response.coords.latitude;
  let lon = response.coords.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeatherForecast);
  //console.log(response);
}

function getCurrentLocationTwo(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayForecastCurrentArea);
}

function showWeatherForecast(response) {
  if (response.data.city === undefined) {
    document.querySelector("#city").innerHTML = `Can't find this location`;
    document.querySelector("#degrees").innerHTML = `?`;
    alert(`If you have this issue, you're probably :
    1. Misspelled the city name;
    2. Wrote a non-exicting place;
    3. Have problems with Wi-Fi connection or server;
    If you have any questions please contact this email : weather.4cast@gmail.com`);
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
      response.data.daily[4].temperature.minimum
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
  //
  //console.log(response);
}

function getWeatherData(cityValue) {
  let apiKeyForecast = "6f75o9ff2b2c1797a73f7cb01efdat74";
  let apiUrlForecast = `https://api.shecodes.io/weather/v1/forecast?query=${cityValue}&key=${apiKeyForecast}&units=metric`;
  axios.get(apiUrlForecast).then(showWeatherForecast);
  axios.get(apiUrlForecast).then(showWeatherForecastTemperature);
  console.log(apiUrlForecast);
}

function forecastValue(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#city-input").value;
  getWeatherData(cityValue);
}

let forecastActive = document.querySelector("#searchCity-form");
forecastActive.addEventListener("submit", forecastValue);

//
//
//

function showWeatherForecastTemperature(response) {
  //

  oneMax = response.data.daily[1].temperature.maximum;

  oneMin = response.data.daily[1].temperature.minimum;

  //

  twoMax = response.data.daily[2].temperature.maximum;

  twoMin = response.data.daily[2].temperature.minimum;

  //

  threeMax = response.data.daily[3].temperature.maximum;

  threeMin = response.data.daily[3].temperature.minimum;

  //

  fourMax = response.data.daily[4].temperature.maximum;

  fourMin = response.data.daily[4].temperature.minimum;

  //

  fiveMax = response.data.daily[5].temperature.maximum;

  fiveMin = response.data.daily[5].temperature.minimum;

  //
  //
  console.log(response);
}

//
//
//

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degrees");

  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = `${Math.round(fahrenheitTemperature)}°`;

  let windSpeedInMiles = Math.round(windSpeed / 1.609344);
  document.querySelector(".windSpeed").innerHTML = `${windSpeedInMiles}mph`;
  //
  let tommorowFahMax = document.querySelector(".tomorrowTempMax");
  maxFahOne = (oneMax * 9) / 5 + 32;
  tommorowFahMax.innerHTML = `${Math.round(maxFahOne)}°/`;

  let tommorowFahMin = document.querySelector(".tomorrowTempMin");
  minFahOne = (oneMin * 9) / 5 + 32;
  tommorowFahMin.innerHTML = `${Math.round(minFahOne)}°`;
  //

  let dayTwoFahMax = document.querySelector(".dayTwoTempMax");
  maxFahTwo = (twoMax * 9) / 5 + 32;
  dayTwoFahMax.innerHTML = `${Math.round(maxFahTwo)}°/`;

  let dayTwoFahMin = document.querySelector(".dayTwoTempMin");
  minFahTwo = (twoMin * 9) / 5 + 32;
  dayTwoFahMin.innerHTML = `${Math.round(minFahTwo)}°`;
  //
  let dayThreeFahMax = document.querySelector(".dayThreeTempMax");
  maxFahThree = (threeMax * 9) / 5 + 32;
  dayThreeFahMax.innerHTML = `${Math.round(maxFahThree)}°/`;

  let dayThreeFahMin = document.querySelector(".dayThreeTempMin");
  minFahThree = (threeMin * 9) / 5 + 32;
  dayThreeFahMin.innerHTML = `${Math.round(minFahThree)}°`;
  //
  let dayFourFahMax = document.querySelector(".dayFourTempMax");
  maxFahFour = (fourMax * 9) / 5 + 32;
  dayFourFahMax.innerHTML = `${Math.round(maxFahFour)}°/`;

  let dayFourFahMin = document.querySelector(".dayFourTempMin");
  minFahFour = (fourMin * 9) / 5 + 32;
  dayFourFahMin.innerHTML = `${Math.round(minFahFour)}°`;
  //
  let dayFiveFahMax = document.querySelector(".dayFiveTempMax");
  maxFahFive = (fiveMax * 9) / 5 + 32;
  dayFiveFahMax.innerHTML = `${Math.round(maxFahFive)}°/`;

  let dayFiveFahMin = document.querySelector(".dayFiveTempMin");
  minFahFive = (fiveMin * 9) / 5 + 32;
  dayFiveFahMin.innerHTML = `${Math.round(minFahFive)}°`;
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#degrees");
  temperatureElement.innerHTML = `${Math.round(celsiusTemperature)}°`;
  let windSpeedInKilometers = Math.round(windSpeed);
  document.querySelector(".windSpeed").innerHTML = `${Math.round(
    windSpeedInKilometers
  )}km/h`;
  //
  let tommorowCelMax = document.querySelector(".tomorrowTempMax");

  tommorowCelMax.innerHTML = `${Math.round(oneMax)}°/`;

  let tommorowCelMin = document.querySelector(".tomorrowTempMin");

  tommorowCelMin.innerHTML = `${Math.round(oneMin)}°`;
  //

  let dayTwoCelMax = document.querySelector(".dayTwoTempMax");

  dayTwoCelMax.innerHTML = `${Math.round(twoMax)}°/`;

  let dayTwoCelMin = document.querySelector(".dayTwoTempMin");

  dayTwoCelMin.innerHTML = `${Math.round(twoMin)}°`;
  //
  let dayThreeCelMax = document.querySelector(".dayThreeTempMax");
  dayThreeCelMax.innerHTML = `${Math.round(threeMax)}°/`;

  let dayThreeCelMin = document.querySelector(".dayThreeTempMin");

  dayThreeCelMin.innerHTML = `${Math.round(threeMin)}°`;
  //
  let dayFourCelMax = document.querySelector(".dayFourTempMax");

  dayFourCelMax.innerHTML = `${Math.round(fourMax)}°/`;

  let dayFourCelMin = document.querySelector(".dayFourTempMin");

  dayFourCelMin.innerHTML = `${Math.round(fourMin)}°`;
  //
  let dayFiveCelMax = document.querySelector(".dayFiveTempMax");
  dayFiveCelMax.innerHTML = `${Math.round(fiveMax)}°/`;

  let dayFiveCelMin = document.querySelector(".dayFiveTempMin");

  dayFiveCelMin.innerHTML = `${Math.round(fiveMin)}°`;
}

let fahrenheitUnit = document.querySelector("#fahrenheit");
fahrenheitUnit.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let celsiusTemperature = null;

let windSpeed = null;

getWeatherData("Canberra");

let searchForm = document.querySelector("#searchCity-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector(".currentAreaButton");
currentLocationButton.addEventListener("click", getCurrentLocation);

let currentForecastButton = document.querySelector(".currentAreaButton");
currentForecastButton.addEventListener("click", getCurrentLocationTwo);

searchCity("Canberra");
