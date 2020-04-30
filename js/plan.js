$(document).ready(function() {

    // loading floor plan
    loadFloors(["ground", "first"]);

    // removing the room from the panel
    $(document).on('click', '.close', function() {
        const floor = $(this).closest("[id]").attr("id")
        saveFloor(floor);
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
        const floor = $(this).closest("[id]").attr("id")
        saveFloor(floor);
    });


    // adding the rooms
    $(document).on('click', '#addingRoom', function() {
        var roomground = $("#fieldground").val();
        $("#ground").append('<div class="lightoff"><div class="close">X</div>' + String(roomground) + '</div>')
        saveFloor("ground")

    });

    $(document).on('click', '#addingRoom2', function() {
        var roomground2 = $("#fieldfirst").val();
        $("#first").append('<div class="lightoff"><div class="close">X</div>' + String(roomground2) + '</div>')
        saveFloor("first")
    });

    // save floor plan function
    function saveFloor(floor) {
        localStorage[floor] = $("#" + floor).html()
    }
    // load floor plan function
    function loadFloors(floors) {
        floors.forEach(floor => localStorage[floor] && $("#" + floor).html(localStorage[floor]))
    }

});
