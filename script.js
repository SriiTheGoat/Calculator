$(document).ready(function() {
    const inputNumb = $("#inputField");

    $(".number-btn").click(function() {
        inputNumb.val(inputNumb.val() + $(this).text());
    });

    $(".operator-btn").click(function() {
        inputNumb.val(inputNumb.val() + $(this).text());
    });

    $("#calculateBtn").click(function() {
        try {
            inputNumb.val(eval(inputNumb.val()));
        } catch (error) {
            inputNumb.val("Something went wrong, Mate.");
        }
    });

    $(document).keydown(function(event) {
        if (event.key === "Enter") {
            try {
                inputNumb.val(eval(inputNumb.val()));
            } catch (error) {
                inputNumb.val("Something went wrong, Mate.");
            }
        }
    });
});


/*
//when the site gets loded the below function executes...
document.addEventListener("DOMContentLoaded", function () {
    
    //i am just geting input field to update it with each click by using for each loop..
    const inputNumb = document.getElementById("inputField");

    // just having numbers of button on a single variable, we can also iterate a for each loop to update our input field..
    const numberButtons = document.querySelectorAll(".number-btn");

    //here we go to iterate a loop, for each numbers of buttions avilable..
    numberButtons.forEach(button => {
        //here i add event listener..
        button.addEventListener("click", function () {
            //here when a button is clicked, it append text on the output field..
            inputNumb.value += button.textContent;
        });
    });


    //add event listeneres ot operatior buttons
    const operatorButtons = document.querySelectorAll(".operator-btn");

    //loop to know which operator gets clicked, then add it to input field..
    operatorButtons.forEach(button => {
        button.addEventListener("click", function () {
            inputNumb.value += button.textContent; 
        });
    });

    // adding event listener to calculate buttons
    const calculate = document.getElementById("calculateBtn");
    calculate.addEventListener("click", function () {
       try {
           inputNumb.value = eval(inputNumb.value);
       } catch (error) {
           inputNumb.value = "Something went wrong, Mate.";
       } 
    });
    // for pressing enter button
    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            try {
                inputNumb.value = eval(inputNumb.value);
            } catch (error) {
                inputNumb.value = "Something went wrong, Mate.";
            }
       } 
    });

});

*/