let apiKey = "28fe7b5f9a78838c639143fc517e4343";

let spinner = $("#result .spinner-border");

let botonConsultar = $("#btnQuery");

console.log("Celcius 22 a farenheit: "+convertCelciusToFahrenheit(22));

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
        let celciusTemp = $("#temp").text();                //Temperatura en celcius
        let celciusSensT = $("#sensacionTermica").text();   //Sensacion termica en celcius
        let celciusMin = $("#min").text();                  //Minima en celcius
        let celciusMax = $("#max").text();                  //Maxima en celcius
        
        let faTemp = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusTemp.replace("ºC",""))));
        let faSens = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusSensT.replace("Sens. térmica ","").replace("ºC",""))));
        let faMin = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusMin.replace("Min. ","").replace("ºC",""))));
        let faMax = setTwoDecimals(convertCelciusToFahrenheit(parseFloat(celciusMax.replace("Max. ","").replace("ºC",""))));
        

        $("#temp").text(faTemp+"ºF");
        $("#sensacionTermica").text("Sens. térmica "+faSens+"ºF");
        $("#min").text("Min. "+faMin+"ºF");
        $("#max").text("Max. "+faMax+"ºF");
    }else if(optionSelected == "Celcius"){

        let farTemp = $("#temp").text();                    //Temperatura en Fahrenheit
        let farSensT = $("#sensacionTermica").text();       //Sensacion termica en Fahrenheit
        let farMin = $("#min").text();                      //Minima en Fahrenheit
        let farMax = $("#max").text();                      //Maxima en Fahrenheit
        
        let celTemp = setTwoDecimals(convertFahrenheitToCelcius(parseFloat(farTemp.replace("ºF",""))));
        let celSens = setTwoDecimals(convertFahrenheitToCelcius(parseFloat(farSensT.replace("Sens. térmica ","").replace("ºF",""))));
        let celMin = setTwoDecimals(convertFahrenheitToCelcius(parseFloat(farMin.replace("Min. ","").replace("ºF",""))));
        let celMax = setTwoDecimals(convertFahrenheitToCelcius(parseFloat(farMax.replace("Max. ","").replace("ºF",""))));
        

        $("#temp").text(celTemp+"ºC");
        $("#sensacionTermica").text("Sens. térmica "+celSens+"ºC");
        $("#min").text("Min. "+celMin+"ºC");
        $("#max").text("Max. "+celMax+"ºC");
    }
});