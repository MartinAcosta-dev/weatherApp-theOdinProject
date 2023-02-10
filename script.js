let apiKey = "28fe7b5f9a78838c639143fc517e4343";

let spinner = $("#result .spinner-border");

let botonConsultar = $("#btnQuery");

console.log("Celcius 22 a farenheti: "+convertCelciusToFahrenheit(22));

console.log("Farenheit 22 a celcius: "+setTwoDecimals(convertFahrenheitToCelcius(22))); 


botonConsultar.click(function(){
    let cityName = $("form input").val();
    
    if(cityName == ""){
        alert("Introduzca el nombre de una ciudad")
    }else{
        cityName.replace(" ","%20");
        getData(cityName, apiKey);
    }
    
});

$("#mainCard").on("change","#selectTemps",function(){
    optionSelected = $(this).val();
    if(optionSelected == "Fahrenheit"){
        let celciusTemp = $("#temp").text();
        let celciusSensT = $("#sensacionTermica").text();
        let celciusMin = $("#min").text();
        let celciusMax = $("#max").text();
        
        let faTemp = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusTemp.replace("ºC",""))));
        let faSens = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusSensT.replace("Sens. térmica ","").replace("º",""))));
        let faMin = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusMin.replace("Min. ","").replace("º",""))));
        let faMax = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusMax.replace("Max. ","").replace("º",""))));
        

        $("#temp").text(faTemp+"ºF");
        $("#sensacionTermica").text(faSens+"ºF");
        $("#min").text(faMin+"ºF");
        $("#max").text(faMax+"ºF");
    }
});