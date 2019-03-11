
//var APIKey = "9633edb5462c1f369f570ca99c8250df";
var latLngArray = ["42.8684411,-122.1684785", "42.8684411,-122.1684785"]
// Here we are building the URL we need to query the database
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9633edb5462c1f369f570ca99c8250df/42.8684411,-122.1684785"

   



//api.openweathermap.org/data/2.5/forecast?lat=42.9446&lon=122.1090

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  console.log(response);

  
  var skycons = new Skycons({"color" : "black"});
  var icon = response.currently.icon.toUpperCase().replace(/-/g, "_"); 
     skycons.set("iconW", Skycons[icon]); 
     skycons.play();



    


 $(".temp").html("<h2>" + 'Currently: ' + +response.currently.temperature + ' °' + " " + response.currently.icon + "</h2>");



})


// Buttons loading on screen and clicking


