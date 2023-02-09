let apiKey = "28fe7b5f9a78838c639143fc517e4343";

let spinner = $("#result .spinner-border");

let botonConsultar = $("#btnQuery");

botonConsultar.click(function(){
    spinner.show();
    let cityName = $("form input").val();
    cityName.replace(" ","%20");
    getData(cityName, apiKey);
});