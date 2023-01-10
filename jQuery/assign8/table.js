$(document).ready(function(){
    $("#add").click(function () {
        markup = "<tr>\
        <td>Martin Blank</td>\
        <td>martinblank@mail.com</td>\
        <td>(480) 631-2097</td>\
        <td>Via Monte Bianco 34, Turin, Italy</td>\
        </tr>" ;
        $("#tbody").append(markup);
    });

});