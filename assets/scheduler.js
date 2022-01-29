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
console.log("Hello there");

function displayTime() {
    var time2 = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#clock2').html(time2);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});




// document.getElementById("button-addon2").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("button-addon2").innerHTML = "YOU CLICKED SAVE!";//when clicking on the button the status changes in the button.
// }
