
console.log("Hello there! General Kenobi");
 

function displayTime() { //this displays the time below the header in the html 
    var time2 = moment().format('MMMM Do YYYY, h:mm:ss a');
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

    localStorage.setItem("hour1", userHour1)//this allows the users input for the first hour to be stored in local storage
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


