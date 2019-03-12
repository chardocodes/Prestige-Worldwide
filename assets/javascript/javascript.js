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

// on the form submit click
$("#add-user").on("click", function (event) {
    event.preventDefault();

    // Get user input
    var memberName = $("#name-input").val().trim();
    var memberEmail = $("#email-input").val().trim();
    var memberAge = $("#age-input").val().trim();
    var memberComment = $("#comment-input").val().trim();

    console.log(memberName);
    console.log(memberEmail);
    console.log(memberAge);
    console.log(memberComment);

    var newMember = {
        name: memberName,
        email: memberEmail,
        age: memberAge,
        comment: memberComment
    }

    database.ref().push(newMember);



    $("#name-input").val("");
    $("#email-input").val("");
    $("#age-input").val("");
    $("#comment-input").val("");



    var alertSpan = $("<span>");
    alertSpan.html("Your info has successfully been added to our database!").css("color", "white")
    $("#bar").append(alertSpan);
});
// get all the data from the input fields 
// console.log that data

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
    // function getValue() {
    //     var selectedValue = $("dropdown-menu").value;
    //     console.log(selectedValue)
    // }

    // // Creates local "temporary" object for holding employee data
    // var newEmp = {
    //     name: empName,
    //     role: empRole,
    //     start: empStart,
    //     rate: empRate
    // };

    // // Uploads employee data to the database
    // database.ref().push(newEmp);

    // // Logs everything to console
    // console.log(newEmp.name);
    // console.log(newEmp.role);
    // console.log(newEmp.start);
    // console.log(newEmp.rate);