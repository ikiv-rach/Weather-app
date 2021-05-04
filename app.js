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
.then((function(t){e.temp.textContent=t.main.temp+" °C",
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