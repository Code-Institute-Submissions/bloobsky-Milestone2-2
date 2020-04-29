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
    $("#hall").click(function() {
        $(this).toggleClass("lighton");
    });
    $("#living-room").click(function() {
        $(this).toggleClass("lighton");
    });
    $("#kitchen").click(function() {
        $(this).toggleClass("lighton");
    });
    $("#office").click(function() {
        $(this).toggleClass("lighton");
    });
    $("#bedroom1").click(function() {
        $(this).toggleClass("lighton");
    });
    $("#bedroom2").click(function() {
        $(this).toggleClass("lighton");
    });
    $("#ensuite").click(function() {
        $(this).toggleClass("lighton");
    });
    $("#bathroom").click(function() {
        $(this).toggleClass("lighton");
    });


});
