$(document).ready(function() {

    // removing the room from the panel
    $(document).on('click', '.close', function() {
        $(this).parent().remove()
    });


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
    $(document).on('dblclick', '.lightoff', function() {
        $(this).toggleClass("lighton");
    });


    // adding the rooms
    $(document).on('dblclick', '#addingRoom', function() {
        var roomground = $("#fieldground").val();
        $("#ground").append('<div class="lightoff"><div class="close">X</div>' + String(roomground) + '</div>')
    });

    $(document).on('dblclick', '#addingRoom2', function() {
        var roomground2 = $("#fieldfirst").val();
        $("#first").append('<div class="lightoff"><div class="close">X</div>' + String(roomground2) + '</div>')
    });

});
