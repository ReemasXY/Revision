

const mainContainer = document.getElementsByTagName("main")[0];
const currentWeatherSection = document.getElementById("CurrentWeather");
const fiveDayForecastSection = document.getElementById("fiveDay");

const search= document.getElementById("Search");
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];



console.log(mainContainer)
//code to get the latitude and longitude of the user's location 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            main(latitude, longitude,"");
        },
        (error) => {
            console.error("Error getting location:", error.message);
        }
    );
} else {
    console.log("Geolocation is not supported by this browser.");
}


// code to get the name of the location based of the users current location 
const getLocationName = async (latitude, longitude) => {
    let response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    let data = await response.json();
    return (data);

};

// code to get the current weather
const currentWeather = async (latitude, longitude) => {
    const request = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6a820086fc01a33073a85e684ca8b5dc`);
    const response = await request;
    const data = await response.json();
    return (data);

}


const fiveDayForecast = async (latitude, longitude) => {
    const request = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=5&units=metric&appid=6a820086fc01a33073a85e684ca8b5dc
`);
    const response = await request;
    const data = await response.json();
    return (data);
}


function capitalizeSentence(sentence) {
    return sentence
        .split(" ") // split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize first letter
        .join(" "); // join back into a sentence
}



const main = async (latitude, longitude,search) => {
    const weatherData = await currentWeather(latitude, longitude);
    const LocationData = await getLocationName(latitude, longitude);
    const fiveDayWeahterData = await fiveDayForecast(latitude, longitude);
console.log(weatherData);
    console.log(search.length)
    const WeatherImage = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;



    let dayName = days[today.getDay()];
    let monthName = months[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();


    currentWeatherSection.innerHTML = `    <div class="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <div class="text-6xl text-yellow-400 drop-shadow-lg">
                        <img src=${WeatherImage} alt="weather icon">
                    </div>
                    <div class="text-white text-center md:text-left">
                        <h2 class="text-4xl md:text-5xl font-semibold mb-2 drop-shadow-lg" id="location">${(search.length>0)?search: LocationData.name}</h2>
                        <p class="text-lg opacity-90 mb-4" id="day">${dayName}, ${monthName} ${date}, ${year}</p>
                        <div class="flex items-baseline justify-center md:justify-start mb-2">
                            <span class="text-6xl md:text-7xl font-bold drop-shadow-lg">${weatherData.main.temp}</span>
                            <span class="text-3xl opacity-80 ml-2">°C</span>
                        </div>
                        <p class="text-xl opacity-90 capitalize">${capitalizeSentence(weatherData.weather[0].description)}</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bg-white/10 p-5 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-eye text-2xl text-yellow-400 mb-3 block"></i>
                        <div class="text-white/80 text-sm mb-1">Visibility</div>
                        <div class="text-white text-xl font-semibold">${weatherData.visibility / 1000} km</div>
                    </div>
                    <div class="bg-white/10 p-5 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-tint text-2xl text-yellow-400 mb-3 block"></i>
                        <div class="text-white/80 text-sm mb-1">Humidity</div>
                        <div class="text-white text-xl font-semibold">${weatherData.main.humidity}%</div>
                    </div>
                    <div class="bg-white/10 p-5 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-wind text-2xl text-yellow-400 mb-3 block"></i>
                        <div class="text-white/80 text-sm mb-1">Wind Speed</div>
                        <div class="text-white text-xl font-semibold">${weatherData.wind.speed} m/s</div>
                    </div>
                    <div class="bg-white/10 p-5 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                        <i class="fas fa-thermometer-half text-2xl text-yellow-400 mb-3 block"></i>
                        <div class="text-white/80 text-sm mb-1">Feels Like</div>
                        <div class="text-white text-xl font-semibold">${weatherData.main.feels_like}°C</div>
                    </div>
                </div>`


    console.log(fiveDayWeahterData.list);
    //display 5 day weather forecast
    const arrdata = fiveDayWeahterData.list.map((value, index) => {
        const WeatherImage = `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
        return `<div class="bg-white/10 p-4 rounded-2xl text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <div class="text-white font-semibold mb-2">${days[today.getDay() + index + 1]}</div>
                        <div class="flex justify-center">
                             <img src=${WeatherImage} alt="weather icon">
                        </div>
                        <div class="text-white text-lg font-semibold">${value.main.temp}°C</div>
                        <div class="text-white/80 text-sm mt-1">${capitalizeSentence(value.weather[0].description)}</div>
                    </div>`
    }).join("");
    fiveDayForecastSection.innerHTML = arrdata;

    mainContainer.classList.remove("invisible");
    mainContainer.classList.remove("visible");

}



//function to find the latitude and longitude of the place searched by the user and display the weather
const locationBasedWeather = async (location) => {
    console.log(location);
    // let city="Patan";
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=6a820086fc01a33073a85e684ca8b5dc`;

    let response = await fetch(url);
    let data = await response.json();
    //   console.log(data)

    if (data.length > 0) {
        main(data[0].lat, data[0].lon,location);
    } else {
        console.log("Location not found!");
    }
}

search.addEventListener("click",()=>{
    const inputLocation = document.getElementById("input").value;
    // console.log(inputLocation)
locationBasedWeather(inputLocation);
})


