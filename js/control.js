$(document).ready(function() {
    $("button").click(function() {
        // changing attributes of the buttons
        if ($(this).text() === "OPEN") {
            $(this).text("CLOSE");
            $('#grg').attr('src', 'img/unlock.svg');
        }
        else if ($(this).text() === "CLOSE") {
            $(this).text("OPEN");
            $('#grg').attr('src', 'img/lock.svg');
        }
        else if ($(this).text() === "SET") {
            $(this).text("UNSET");
            $('#alarma').attr('src', 'img/lock.svg');
        }
        else if ($(this).text() === "UNSET") {
            $(this).text("SET");
            $('#alarma').attr('src', 'img/unlock.svg');
        }
        else if ($(this).text() === "LOCK") {
            $(this).text("UNLOCK");
            $('#lock').attr('src', 'img/lock.svg');
        }
        else if ($(this).text() === "UNLOCK") {
            $(this).text("LOCK");
            $('#lock').attr('src', 'img/unlock.svg');
        }
        else {
            console.log("Error");
        }

    });
    // changing thermostat value
    $("form").submit(function(event) {
        if ($("input:text").val() >= 5 && $("input:text").val() <= 25) {
            $("span").text($("input:text").val()).show();
            return;
        }
        $("span").text("Temperature should be set within 5 to 25 degrees.").show().fadeOut(5000);
        event.preventDefault();
    });

    $("button").click(function() {
        $(this).toggleClass("btn-danger");
    });


});
