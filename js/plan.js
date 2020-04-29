$(document).ready(function() {


    $("#groundfloor").click(function() {
        // changing attributes of the buttons
        if ($(this).text() === "Show ground floor") {
            $(this).text("Hide ground floor");
        }

        else if ($(this).text() == "Hide ground floor") {
            $(this).text("Show ground floor");
        }
        else {
            console.log("Error");
        }
    });
    $("#firstfloor").click(function() {
        // changing attributes of the buttons
        if ($(this).text() === "Show first floor") {
            $(this).text("Hide first floor");
        }

        else if ($(this).text() === "Hide first floor") {
            $(this).text("Show first floor");
        }
        else {
            console.log("Error");
        }

    });

    // toggling lights
    $(".lightoff").click(function() {
        $(this).toggleClass("lighton");
    });
   


});
