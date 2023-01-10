$(document).ready(function () {

    /* username validation start*/

    let usernameError = true;
    let username2Error = true;

    $('#fname').keyup(function () {
        fnameval();
    })
    $('#lname').keyup(function () {
        fnameval();
    })

    function fnameval() {
        let fname = $("#fname").val();
        if (fname.length == "" || fname.length == null) {
            $("#user").removeClass("d-none").show();
            // $("#fname").focus();
            usernameError = false;
            return true;
        }
        else if (lname.length == "" || lname.length == null) {
            // alert("hai");
            $("#user2").removeClass("d-none").show();
            // $("#lname").focus();
            username2Error = false;
            return false;
        }
        else {
            $("#user").hide();
            $("#user2").hide();

            return true;
        }
    }
 
    /* username validation end*/

    $( "#fname" ).focus(function() {
      });

    // submit the form function

    $("#myform").submit(function () {
        fnameval();
        // focus();
        if (usernameError == true && username2Error == true) {
            return true;
        } else {
            return false;
        }
    });

});

