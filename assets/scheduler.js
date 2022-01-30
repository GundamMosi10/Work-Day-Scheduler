
console.log("Hello there");

// var saveButton = document.getElementById("#button1");//this should be the 1st save button on the page 

function displayTime() { //this displays the time below the header in the html 
    var time2 = moment().format('MMMM Do YYYY');
    $('#clock2').html(time2);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();

});

var militaryTime = parseInt(moment().format("H"));//changing the time to be read as military time and not in the 12 hour format
console.log(militaryTime)//printing the current time to console to check 

$("textarea").each(function() {//this function will help with showing the past, present and future colors on the scheduler 
    var timeSlot = parseInt($(this).attr("data"));

    if (militaryTime === timeSlot) {//this is for the color for the present
        $(this).addClass("present");
    }

    if (militaryTime < timeSlot) {//this is the color for the future 
        $(this).addClass("future");
    }

    if (militaryTime > timeSlot) {//this is the color for the past
        $(this).addClass("past")
    }
})

//For the first hour
$("button").on("click", function(){
    var hour1 = parseInt($(this).parent().attr("data"));
    var userHour1 = $("#first-hour").val();

    localStorage.setItem("hour1", userHour1)
})

$("#first-hour").append(localStorage.getItem("hour1"));//allows me to get the info from the local storage to print in the 
//input field even if we reload the page. 

//This is for the 2nd hour
$("button").on("click", function(){
    var hour2 = parseInt($(this).parent().attr("data"));
    var userHour2 = $("#second-hour").val();

    localStorage.setItem("hour2", userHour2)
})

$("#second-hour").append(localStorage.getItem("hour2"));

//For the third hour
$("button").on("click", function(){
    var hour3 = parseInt($(this).parent().attr("data"));
    var userHour3 = $("#third-hour").val();

    localStorage.setItem("hour3", userHour3)
})

$("#third-hour").append(localStorage.getItem("hour3"));

//For the fourth hour
$("button").on("click", function(){
    var hour4 = parseInt($(this).parent().attr("data"));
    var userHour4 = $("#fourth-hour").val();

    localStorage.setItem("hour4", userHour4)
})

$("#fourth-hour").append(localStorage.getItem("hour4"));

//For the fifth hour
$("button").on("click", function(){
    var hour5 = parseInt($(this).parent().attr("data"));
    var userHour5 = $("#fifth-hour").val();

    localStorage.setItem("hour5", userHour5)
})

$("#fifth-hour").append(localStorage.getItem("hour5"));

//For the sixth hour
$("button").on("click", function(){
    var hour6 = parseInt($(this).parent().attr("data"));
    var userHour6 = $("#sixth-hour").val();

    localStorage.setItem("hour6", userHour6)
})

$("#sixth-hour").append(localStorage.getItem("hour6"));

//For the seventh hour
$("button").on("click", function(){
    var hour7 = parseInt($(this).parent().attr("data"));
    var userHour7 = $("#seventh-hour").val();

    localStorage.setItem("hour7", userHour7)
})

$("#seventh-hour").append(localStorage.getItem("hour7"));

//For the eigth hour
$("button").on("click", function(){
    var hour8 = parseInt($(this).parent().attr("data"));
    var userHour8 = $("#eigth-hour").val();

    localStorage.setItem("hour8", userHour8)
})

$("#eigth-hour").append(localStorage.getItem("hour8"));

//For the ninth hour
$("button").on("click", function(){
    var hour9 = parseInt($(this).parent().attr("data"));
    var userHour9 = $("#ninth-hour").val();

    localStorage.setItem("hour9", userHour9)
})

$("#ninth-hour").append(localStorage.getItem("hour9"));


















// document.getElementById("button1").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("button1").innerHTML = "YOU CLICKED ME!";
// }







// $("button1").on("click", function(){
//     console.log("#button1");
// })

// var currentBox1 = parseInt($(this)).parent().attr("data");
//     var currentInput1 = $("#first-hour").val();

//     localStorage.setItem("currentBox1", currentInput1)
//     console.log(currentBox1, currentInput1);
// document.getElementById("button-addon2").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("button-addon2").innerHTML = "YOU CLICKED SAVE!";//when clicking on the button the status changes in the button.
// }
//     // set new submission to local storage 
//     localStorage.setItem("key", JSON.stringify(saveInput));
      
// });

// var input = document.getElementById('saveServer').value;
// localStorage.setItem('server', input);
//make sure everything is linked together through console.log
//create a table that will hold the planner itself through bootstrap 
//
// var saveButton = document.getElementById("button-addon2");//this should be the 1st save button on the page 
// var saveInput = document.querySelector("#placeholder");
// var saveUserInput = [];
// var key = ["9am"];
// var value = ["hello there"];


// localStorage.setItem("key", input.form-control);

// button-addon2.addEventListener("click", function(event) {
//     event.preventDefault();

//     // set new submission to local storage 
//     localStorage.setItem("key", JSON.stringify(saveInput));
      
// });

// var input = document.getElementById('saveServer').value;
// localStorage.setItem('server', input);