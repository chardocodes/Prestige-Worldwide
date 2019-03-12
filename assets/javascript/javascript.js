//steve's weather queryURL current
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9633edb5462c1f369f570ca99c8250df/42.8684411,-122.1684785"
//steve's variables for long and lat
var long, lat;
$("#parksDropdown a").click(function () {
    var parks = $(this).attr("data-value");
    console.log(parks);

    var parkCode = parks;
    var campsiteURL = "https://api.nps.gov/api/v1/campgrounds?parkCode=" + parkCode + "&api_key=xcH6CocpEXTgm3xZBU7WXBoT9uwNYrg94gcV3ocX";
    var parkNameURL = "https://api.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=xcH6CocpEXTgm3xZBU7WXBoT9uwNYrg94gcV3ocX";
    $.ajax({
        url: parkNameURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#natpark-name").text(response.data[0].fullName);

    });
    //making our API call
    $.ajax({
        url: campsiteURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //select children elements on click
        //return JSON data of children clicked
        $("#campsite-name").text(response.data[0].name);
        $("#park-view").text("•Description: " + response.data[0].description);
        $("#total-sites").text("•Total Campsites: " + response.data[0].campsites.totalSites);
        $("#access-view-regulations").text("•Regulations Overview: " + response.data[0].regulationsOverview);
        $("#access-view-adainfo").text("•Wifi Information: " + response.data[0].accessibility.internetInfo);
        $("#access-view-wifi").text("•Accessibility: " + response.data[0].accessibility.adaInfo);
        $("#access-view-fire-stove").text("•Fire Stove Policy: " + response.data[0].accessibility.fireStovePolicy);
        $("#access-view-rv-info").text("•RV Information: " + response.data[0].accessibility.rvInfo);
        $("#access-view-wheelchair").text("•Wheelchair Access: " + response.data[0].accessibility.wheelchairAccess);
    });

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


});