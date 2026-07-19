let buttonbox = document.querySelector(".search");
let inputbox = document.querySelector(".header input");
let weatherIcon = document.querySelector(".weather-icon");
let weather = document.querySelector(".weather");

const url ="https://api.openweathermap.org/data/2.5/weather?&appid=fc0cf0dd82b93e46c264999f54371caa&units=metric&q=" ;

async function checkWeather(city) {
    const response = await fetch( url + city );

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"; 
        weather.style.display = "none";

    }else {

    let data = await response.json();
    console.log(data);


    document.querySelector(".temp").innerText = data.main.temp + "°C";
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds" ){
        weatherIcon.src = "clouds2.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Clear.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    } else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain2.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }
    
       weather.style.display = "block";
      document.querySelector(".error").style.display = "none"; 
       

}
}
buttonbox.addEventListener("click", ()=>{
   checkWeather(inputbox.value);

});
inputbox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
   checkWeather(inputbox.value);
}
});
    
