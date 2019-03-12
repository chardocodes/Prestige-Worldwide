
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


// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyBTUnBz3WmPn8YOhxJfxqJns5lSqLrrvG4",
    authDomain: "fir-practice-300ab.firebaseapp.com",
    databaseURL: "https://fir-practice-300ab.firebaseio.com",
    projectId: "fir-practice-300ab",
    storageBucket: "fir-practice-300ab.appspot.com",
    messagingSenderId: "960973115209"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-member-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var empName = $("#employee-name-input").val().trim();
    var empRole = $("#role-input").val().trim();
    var empStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    var empRate = $("#rate-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newEmp = {
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
    };
  
    // Uploads employee data to the database
    database.ref().push(newEmp);
  
    // Logs everything to console
    console.log(newEmp.name);
    console.log(newEmp.role);
    console.log(newEmp.start);
    console.log(newEmp.rate);
});