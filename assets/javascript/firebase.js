// Initialize Firebase
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

$(".submit-form").on("submit", function (e) {
    e.preventDefault();

    // getting the input fields values 
    var userInput = {
        name: $("#name-input").val().trim(),
        email: $("#email-input").val().trim(),
        age: $("#age-input").val().trim(),
        comment: $("#comment-input").val().trim()
    };

    console.log(userInput);

    database.ref("/users").push(userInput);

    $("#name-input").val("");
    $("#email-input").val("");
    $("#age-input").val("");
    $("#comment-input").val("");
});