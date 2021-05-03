/*dom.search.addEventListener("click", searchCb);

let dom = (function () {
    let displayWeather = document.querySelector(".displayWeather");
    let cityname = document.querySelector(".cityName");
    let search = document.querySelector(".search");
    let temp = document.querySelector(".temp");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    let name = document.querySelector(".name");
    return {
        cityname,
        search,
        temp,
        humidity,
        wind,
        displayWeather,
        name,
    }
})();

function getWeather(location, apikey ){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`, {mode:"cors"})
    .then(function(res) {
        return res.json(); 
    })
    .then(function(r) {
        dom.temp.textContent = r.main.temp + " C";
        dom.humidity.textContent = r.main.humidity + " %";
        dom.wind.textContent = r.wind.speed + " km/h";
    }); 
} 

let apikey="2aa31b1d167d0f8341bd55e8c2aba6ae"; 
function searchCb() {
    if(dom.cityname.value == "") {
        return
    }

    let location = dom.cityname.value;
    getWeather(location, apikey);
    dom.name.textContent = dom.cityname.value;
    dom.displayWeather.classList.remove("hide"); 
    dom.cityname.value = "";
    dom.cityname.placeholder = "enter city name"
}

window.addEventListener("load", () =>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector (".temperature-description");
    let temperatureDegree= document.querySelector (".temperature-degree");
    let locationTimezone= document.querySelector (".location-timezone");
    
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long =position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/forecast?id=${lat}${long}&appid=c35423dcb7fedd04ac320bd65d939dec`;
            fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            console.log(data);
            const {temperture, summary} = data.currently; 
            //DOM Elements
            temperatureDegree.textContent = teperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone  
          });
        });
        
    }
});*/


(()=>{let e=function(){let e=document.querySelector(".displayWeather");
return{
        cityname:document.querySelector(".cityName"),
        search:document.querySelector(".search"),
        temp:document.querySelector(".temp"),
        humidity:document.querySelector(".humidity"),
        wind:document.querySelector(".wind"),
        displayWeather:e, 
        name:document.querySelector(".city")
      }
      }();
e.search.addEventListener("click",(function(){
    var t;
    ""!=e.cityname.value&&(
        t=e.cityname.value,
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=c35423dcb7fedd04ac320bd65d939dec`,{mode:"cors"})
.then((function(e){
        return e.json()
    }
    ))
.then((function(t){e.temp.textContent=t.main.temp+" C",
        e.humidity.textContent=t.main.humidity+" %",
        e.wind.textContent=t.wind.speed+" km/h"})),
        e.name.textContent=e.cityname.value,
        e.displayWeather.classList.remove("hide"),
        e.cityname.value="",
        e.cityname.placeholder="Enter city name")
    }
    ))
    })
    ();