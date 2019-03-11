
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
  
// });
  $("#parksDropdown a").click(function () {
        var parks = $(this).attr("data-value");
        //create variable to store referance 
        console.log(parks);
       
        //return data in a <p>
        //return image in <img> tag.
        //how to assign our images load 
 
        var parkCode = "";
        // console.log(parkCode);
        // Here we construct our URL
        var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=xcH6CocpEXTgm3xZBU7WXBoT9uwNYrg94gcV3ocX";
        // page loads
        //user clicks drop down menu to select park
        //user selects park call
        //calls for JSON data
        //JSON data displayed for selected park
        
        
        //making our API call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        
        //select children elements on click
        //return JSON data of children clicked
          
        });
 
 
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
