
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


$("button").on("click", function(){
    var hour1 = parseInt($(this).parent().attr("data"));
    var messtime9 = $("#first-hour").val();

    localStorage.setItem("time9", messtime9)
})

$("#nine-am").append(localStorage.getItem("hour1, messtime10"));























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