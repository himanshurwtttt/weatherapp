const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "5e7bdc20a0fcb25f31f02b299f0a619e";

const checkWeather = async (cty) => {
    const response = await fetch(`${BASE_URL}${cty}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);

    document.querySelector('.temp').innerHTML = `Temp : ${data.main.temp} ° C`
    document.querySelector('.humi').innerHTML = `Humidity : ${data.main.humidity} %`
    document.querySelector('.wind').innerHTML = (`wind : ${data.wind.speed} Km/h`)
    document.querySelector('.cityName').innerHTML = data.name;
}


const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    const input = document.querySelector('.box input')
    checkWeather(input.value);


})

