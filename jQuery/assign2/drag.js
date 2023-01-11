$(document).ready(function () {
    $(".drag").draggable();
    $(".drop").droppable({
        accept: ".drag",
        drop: function (event, ui) {
            var arrdrag = ui.draggable.attr("id").split("-");
            if ($(this).attr("id") == arrdrag[0]) {
                $(this).css("background-color", "green");
                ui.draggable.css("background-color", "green");
            }
            else {
                $(this).css("background-color", "red");
                ui.draggable.css("background-color", "red");
            }
        }

    });

});