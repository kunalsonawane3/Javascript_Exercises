let loc = document.getElementById("location");
//let date = document.getElementById("date");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");

//let date1 = document.getElementById("date1");
let tempIcon1 = document.getElementById("temp-icon1");
let tempValue1 = document.getElementById("temp-value1");
let climate1 = document.getElementById("climate1");

let date2 = document.getElementById("date2");
let tempIcon2 = document.getElementById("temp-icon2");
let tempValue2 = document.getElementById("temp-value2");
let climate2 = document.getElementById("climate2");

let date3 = document.getElementById("date3");
let tempIcon3 = document.getElementById("temp-icon3");
let tempValue3 = document.getElementById("temp-value3");
let climate3 = document.getElementById("climate3");

let date4 = document.getElementById("date4");
let tempIcon4 = document.getElementById("temp-icon4");
let tempValue4 = document.getElementById("temp-value4");
let climate4 = document.getElementById("climate4");

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");

const key = "0acc8ee7a99dcad5ed7cfd991096598c"
        


searchButton.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(searchInput.value);
    getWhether(searchInput.value);
    searchInput.value = "";
});

const getWhether = async (city)=>{
    try{
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        //console.log(city);
        let weatherData = await response.json();
        //console.log(weatherData); 
        //const{name} = weatherData;
        const{temp} = weatherData.main;
        let{id,main} = weatherData.weather[0];

        
        date.textContent = "Current";
        climate.textContent = main;
        tempValue.textContent = Math.round(temp-273);
        returnIcon(id,tempIcon);

        forecastApi(city);
       

    }
    catch(error){
        console.log(error);
        alert("city not found!");
    }
}

const forecastApi = async (city) => {

    const response1 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`)
    let forecast = await response1.json();

    //console.log(forecast);
    const{name,country} = forecast.city;
    loc.textContent = name + " (" + country + ")"; 
    date1.textContent = "Tomarrow";
    forecast.list[8].weather[0];
    climate1.textContent = forecast.list[8].weather[0].main;
    returnIcon(forecast.list[8].weather[0].id,tempIcon1);
    tempValue1.textContent = Math.round(forecast.list[8].main.temp-273);

    date2.textContent = timeConverter(forecast.list[16].dt);
    console.log(forecast.list[16].dt_txt);
    climate2.textContent = forecast.list[16].weather[0].main;
    returnIcon(forecast.list[16].weather[0].id,tempIcon2);
    tempValue2.textContent = Math.round(forecast.list[16].main.temp-273);

    date3.textContent = timeConverter(forecast.list[24].dt);
    climate3.textContent = forecast.list[24].weather[0].main;
    returnIcon(forecast.list[24].weather[0].id,tempIcon3);
    tempValue3.textContent = Math.round(forecast.list[24].main.temp-273);

    date4.textContent = timeConverter(forecast.list[32].dt);
    climate4.textContent = forecast.list[32].weather[0].main;
    returnIcon(forecast.list[32].weather[0].id,tempIcon4);
    tempValue4.textContent = Math.round(forecast.list[32].main.temp-273);
}

function returnIcon(id,icon){
    if(id >= 200 && id < 300){
        icon.src = "../icons/thunderstorm.png"
    }
    else if(id >= 300 && id < 400){
        icon.src = "../icons/drizzle.png"
    }
    else if(id >= 500 && id < 600){
        icon.src = "../icons/rain.png"
    }
    else if(id >= 600 && id < 700){
        icon.src = "../icons/snow.png"
    }
    else if(id >= 700 && id < 800){
        icon.src = "../icons/haze.png"
    }
    else if(id > 800 && id < 900){
        icon.src = "../icons/clouds.png"
    }
    else{
        icon.src = "../icons/sun.png"
    }
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }

window.addEventListener("load", ()=>{
    let long, lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
            //const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=0acc8ee7a99dcad5ed7cfd991096598c`

            fetch(api).then((response)=>{
                return  response.json();
            })
            .then(data =>{
                console.log(data);
                //const{dt} = data.daily[0];
                const{name} = data;
                const{temp} = data.main;
                const{id,main} = data.weather[0];

                loc.textContent = name;
                date.textContent = "Current"
                climate.textContent = main;
                returnIcon(id,tempIcon);
                tempValue.textContent = Math.round(temp-273);

                forecastApi(name);
            })
        })
    }
})