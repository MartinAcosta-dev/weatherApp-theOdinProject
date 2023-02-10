function setTwoDecimals(num){
    return (Math.round(num * 100) / 100).toFixed(2)
}

function corregir(){
    if ($("#temp").text() == "NaNº"){
        $("#tempCard").hide();
    }
}

function mostrarClima(clima){
    if(clima.cityName == undefined){
        console.log("Indefinido")
    }else{
        $("#result").text("");

        let newWeather = `
        <div id="tempCard">
            <div id="cityName" >${clima.cityName}</div>
            <div id="temp">${setTwoDecimals(clima.temp)}º</div>
            <div id="sensacionTermica">Sens. térmica ${setTwoDecimals(clima.sensacionTermica)}º</div>
            <div id="min">Min. ${setTwoDecimals(clima.min)}º</div>
            <div id="max">Max. ${setTwoDecimals(clima.max)}º</div>
            <div id="desc">${clima.desc}</div>
        </div>
        `;

        $("#result").append(newWeather);

        corregir();
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
    
    }catch(error){
        console.log("ERROR!: "+error)
    }
    
    $("#result .spinner-border").hide();

    mostrarClima(clima);
    cambiarEstilo();
}