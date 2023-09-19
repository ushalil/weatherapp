const apiKey = "d05340b3398da9653f71311800997359";
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

    const searchBox = document.querySelector(".search input")
    const searchButton = document.querySelector(".search button")
    const weatherIcon = document.querySelector(".weather-icon")

    async function checkWeather(city) {
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();
            let icon = data.weather[0].main;
    
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "mp/h";
            
            weatherIcon.src = `images/${icon}.toLowerCase().png`;
    
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }

        
    }

window.addEventListener("load", () => {
        checkWeather("New York");
    });

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


//  if(data.weather[0].main == "Clouds") {
//             weatherIcon.src = "images/clouds.png"
//  }
//  if(data.weather[0].main == "sunny") {
//     weatherIcon.src = "images/sunnny.png"
// }
// if(data.weather[0].main == "rain") {
//     weatherIcon.src = "images/rain.png"
// }
// if(data.weather[0].main == "snow") {
//     weatherIcon.src = "images/snow.png"
// }
// if(data.weather[0].main == "clear") {
//     weatherIcon.src = "images/clear.png"
// }
