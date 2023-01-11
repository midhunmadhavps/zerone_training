$(document).ready(function () {

    /* username validation start*/

    let usernameError = true;
    let username2Error = true;
    let radioError = true;
    let dateError = true;
    let monthError = true;
    let yearError = true;
    let countryError = true;
    let emailError = true;
    let password = true;
    let confirmpass = true;



    $('#fname').keyup(function () {
        $("#user").hide();
    })
    $('#lname').keyup(function () {
        $("#user2").hide();
    })
    $(".optradio").change(function () {
        $("#radio").hide();
    })
    $('#date').change(function () {
        $("#d_val").hide();
    });
    $('#month').change(function () {
        $("#m_val").hide();
    });
    $('#year').change(function () {
        $("#y_val").hide();
    });

    $("#country").change(function () {
        $("#c_val").hide();
    });
    $('#email').keyup(function () {
        $("#e_val").hide();
    })
    $('#pass1').keyup(function () {
        $("#p_val").hide();
    });

    $('#pass2').keyup(function () {
        // $("#cp_val").hide();
        formval();
    })

    function formval() {
        // let isDataCorrect = true;
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let date = $("#date").val();
        let month = $("#month").val();
        let year = $("#year").val();
        let country = $("#country").val();
        let email = $("#email").val();
        var valid1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var valid2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
        let pass1 = $("#pass1").val();
        let pass2 = $("#pass2").val();



        if (fname.length == "" || fname == null) {
            $("#user").removeClass("d-none").show();
            usernameError = false;
        }

        if (lname.length == "" || lname == null) {
            $("#user2").removeClass("d-none").show();
            username2Error = false;
        }

        if ($('input:radio[id="optradio"]:checked').length == 0) {
            $("#radio").removeClass("d-none").show();
            radioError = false;
        }

        if (date.length == "") {
            $("#d_val").removeClass("d-none").show();
            dateError = false;
        }

        if (month.length == "") {
            $("#m_val").removeClass("d-none").show();
            monthError = false;
        }

        if (year.length == "") {
            $("#y_val").removeClass("d-none").show();
            yearError = false;
        }

        if (country.length == 0 || country == null) {
            $("#c_val").removeClass("d-none").show();
            countryError = false;
        }

        if (email.length == "" || email == null || !valid1.test(email)) {
            $("#e_val").removeClass("d-none").show();
            emailError == false;
        }

        if (pass1.trim() == "" || !valid2.test(pass1)) {
            $("#p_val").removeClass("d-none").show();
            password == false;
        }

        if (pass2.length == "" || pass2 != pass1) {
            $("#cp_val").removeClass("d-none").show();
            confirmpass == false;
        }
        else{
        $("#cp_val").hide();

        }
    }

    /* username validation end*/


    // submit the form function

    $("#myform").submit(function () {
        formval();
        if (usernameError == true && username2Error == true && radioError == true 
        && dateError == true && monthError == true && yearError == true &&
        countryError == true && emailerror == true && password == true && confirmpass == true) {
            return true;
        } else {
            return false;
        }
    });

});

