const url ="https://api.openweathermap.org/data/2.5/weather?&appid=fc0cf0dd82b93e46c264999f54371caa&units=metric&q=kathmandu" ;
async function checkWeather() {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

    
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

}
checkWeather();