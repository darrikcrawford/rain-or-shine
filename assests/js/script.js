const getWeatherInfo = function() {
	const apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=bc5897eea54f7f82154e145b1c1db2dc"
	fetch(apiUrl);
};
  
getWeatherInfo();
  