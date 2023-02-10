let apiKey = "28fe7b5f9a78838c639143fc517e4343";

let spinner = $("#result .spinner-border");

let botonConsultar = $("#btnQuery");

botonConsultar.click(function(){
    let cityName = $("form input").val();
    
    if(cityName == ""){
        alert("Introduzca el nombre de una ciudad")
    }else{
        cityName.replace(" ","%20");
        getData(cityName, apiKey);
    }
    
});