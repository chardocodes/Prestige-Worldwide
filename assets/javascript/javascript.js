


var queryURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9633edb5462c1f369f570ca99c8250df/42.8684411,-122.1684785"




// // We then created an AJAX call






// var parkCode = "";
// // console.log(parkCode);
// // Here we construct our URL
// var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=xcH6CocpEXTgm3xZBU7WXBoT9uwNYrg94gcV3ocX";
// // page loads
// //user clicks drop down menu to select park
// //user selects park call
// //calls for JSON data
// //JSON data displayed for selected park


// //making our API call
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response);


// //select children elements on click
// //return JSON data of children clicked
var long, lat;
// });
$("#parksDropdown a").click(function () {
    var park = $(this).attr("data-value");
    var parks = [
        {
            name: "crla",
            lat: "42.8684411",
            long: "-122.1684785"
        },
        {
            name: "chis",
            lat: "30.1499",
            long: "-97.7841"
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "jotr",
            lat: "33.8971",
            long: "-115.9511" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },
        {
            name: "deva",
            lat: "36.4914",
            long: "-117.1023" 
        },

    ];
    //create variable to store referance 
    for (var i = 0; i < parks.length; i++) {
        if (park === parks[i].name) {
            long = parks[i].long;
            lat = parks[i].lat;

        }
    }
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9633edb5462c1f369f570ca99c8250df/" + lat + "," + long;
    console.log(queryURL)


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);


        var skycons = new Skycons({ "color": "black" });
        var icon = response.currently.icon.toUpperCase().replace(/-/g, "_");
        skycons.set("iconW", Skycons[icon]);
        skycons.play();


        $(".temp").html("<h2>" + 'Currently: ' + +response.currently.temperature + ' °' + " " + response.currently.icon + "</h2>");

    })


    //         console.log("________________________")
    //         console.log("long", parks[i].long)
    //         console.log(i);
    //         console.log("________________________")
    //     }
    // for (var i = 0; i < parks.length; i++) {
    //     if(park === parks[i]) {
    //         console.log("________________________")
    //         console.log("long", parks[i].long)
    //         console.log(i);
    //         console.log("________________________")
    //     }
    //     else if(parks[i].name === "deva") {
    //         console.log("________________________")
    //         console.log("long", parks[i].long)
    //         console.log(i);
    //         console.log("________________________")
    //     }
    // }


    //return data in a <p>
    //return image in <img> tag.
    //how to assign our images load 

    var parkCode = "";
    // console.log(parkCode);
    // Here we construct our URL
    var queryURL = "https://api.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=xcH6CocpEXTgm3xZBU7WXBoT9uwNYrg94gcV3ocX";
    // page loads
    //user clicks drop down menu to select park
    //user selects park call
    //calls for JSON data
    //JSON data displayed for selected park


    //making our API call
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);

    //select children elements on click
    //return JSON data of children clicked

    // });


});
//select decendent 
function getValue() {
    var selectedValue = $("dropdown-menu").value;
    console.log(selectedValue)
}


  //add value to dropdown items
  //call API to request data per user selection
  //user selects Park
  //api call made
  //information and images returned
// var parkValue = [{"id":"chis", "name": "Channel Islands"},{ "id":"crla", "name":"Crater Lake"},{ "id":"deva", "name":"Death Valley"}, {"id":"jotr", "name": "Joshua Tree"},{"id":"kica", "name":"Kings Canyon"}, {"id":"lavo", "name": "Lassen Volcanic"},{"id":"mora", "name":"Mount Rainier"}, {"id":"ncco", "name":"North Cascades"}, "olym", "pinn", "redw", "sequ", "yose"];

// for( var i = 0; i<parkValue.length; i)

//1.CA    Channel Islands - chis
// 2.OR    Crater Lake - crla
// 3.CA    Death Valley -  deva
// 4.CA    Joshua Tree -  jotr
// 5.CA    Kings Canyon -  kica
// 6.CA    Lassen Volcanic - lavo
// 7.CA    Mount Rainier -  mora
// 8.WA    North Cascades - ncco
// 9.WA    Olympic - olym
// 10.CA   Pinnacles pinn
// 11.CA   Redwood - redw
// 12.CA    Sequoia - sequ
// 13.CA    Yosemite - yose
