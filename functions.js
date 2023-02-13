function setTwoDecimals(num){
    return (Math.round(num * 100) / 100).toFixed(2)
}

function convertCelciusToFahrenheit(temperatura){
    let resultado = (temperatura * 1.8 ) + 32;

    return resultado
}

function convertFahrenheitToCelcius(temperatura){
    let resultado = (5/9) * (temperatura - 32 );

    return resultado
}

function mostrarClima(clima){
    if(clima.cityName == undefined){
        console.log("Indefinido")
    }else{
        $("#result").text("");

        let newWeather = `
        <div id="tempCard">
            <div id="cityName" >${clima.cityName}</div>
            <div id="temp">${setTwoDecimals(clima.temp)}ºC</div>
            <div id="sensacionTermica">Sens. térmica ${setTwoDecimals(clima.sensacionTermica)}ºC</div>
            <div id="min">Min. ${setTwoDecimals(clima.min)}ºC</div>
            <div id="max">Max. ${setTwoDecimals(clima.max)}ºC</div>
            <div id="desc">${clima.desc}</div>
            <div> 
                <select id="selectTemps">
                    <option>Celcius</option>
                    <option>Fahrenheit</option>
                </select>
            </div>
        </div>
        `;

        $("#result").append(newWeather);

    }
}

function cambiarEstilo(){
    let desc = $("#desc").text();
    if(desc == "Description: Clear"){
        $("#estilos").attr("href","styleSunny.css")
    }else{
        $("#estilos").attr("href","styleRainy.css")
    }
}

async function getData( cityName, apiKey){
    spinner.show();
    
    try{
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
        let resJson = await res.json();
    
        clima = {};
    
        clima.cityName = resJson.name;
        clima.temp = resJson.main.temp;
        clima.sensacionTermica = resJson.main.feels_like;
        clima.min = resJson.main.temp_min;
        clima.max = resJson.main.temp_max;
        clima.desc = "Description: "+resJson.weather[0].main;

        console.log(resJson);

        $("#result .spinner-border").hide();

        mostrarClima(clima);
        cambiarEstilo();
    
    }catch(error){
        console.log("ERROR!: "+error)
    }
    
    
}