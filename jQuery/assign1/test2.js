$(document).ready(function () {

    /* username validation start*/

    let validError = true;

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
        $("#cp_val").hide();
        // formval();
    })


    function formval() {
        // let isDataCorrect = true;

        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let date = $("#date").val();
        let month = $("#month").val();
        let year = $("#year").val();
        let postal = $("#postal").val();
        let country = $("#country").val();
        let email = $("#email").val();
        var valid1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var valid2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
        let pass1 = $("#pass1").val();
        let pass2 = $("#pass2").val();

        let zips = $("#zip").val();
        var zip1 = /^[0-9]{5}(?:-[0-9]{4})?$/;
        var zip2 = /^[0-9]{6}(?:-[0-9]{4})?$/;
        // let country = $("#country").val();


        if (fname.length == "" || fname == null) {
            $("#user").removeClass("d-none").show();
            validError = false;
            return false;
        }

        if (lname.length == "" || lname == null) {
            $("#user2").removeClass("d-none").show();
            validError = false;
            return false;
        }

        if ($('input:radio[id="optradio"]:checked').length == 0) {
            $("#radio").removeClass("d-none").show();
            validError = false;
            return false;
        }

        if (date.length == "") {
            $("#d_val").removeClass("d-none").show();
            validError = false;
            return false;
        }

        if (month.length == "") {
            $("#m_val").removeClass("d-none").show();
            validError = false;
            return false;
        }

        if (year.length == "") {
            $("#y_val").removeClass("d-none").show();
            validError = false;
            return false;
        }

        if (postal.length > 250) {
            $("#postal_val").removeClass("d-none").show();
            validError = false;
            return false;
        }

        if (country.length == 0 || country == null) {
            $("#c_val").removeClass("d-none").show();
            validError = false;
            return false;

        }

        if (email.length == "" || email == null || !valid1.test(email)) {
            $("#e_val").removeClass("d-none").show();
            validError = false;
            return false;

        }

        if (pass1.trim() == "" || !valid2.test(pass1)) {
            $("#p_val").removeClass("d-none").show();
            validError = false;
            return false;
            
        }

        if (pass2.length == "" || pass2 != pass1) {
            $("#cp_val").removeClass("d-none").show();
            validError = false;
            return false;

        }
        if ((country == "usa") && (!zip1.test(zips))) {
            $("#ukzip").removeClass("d-none").show();
            validError = false;
            return false;


        }
        if (((country == "uk") || (country == "aus") || (country == "china") || (country == "india")) && (!zip2.test(zips))) {
            $("#ukzip").removeClass("d-none").show();
            validError = true;
            return false;

        }
        else {
            alert("hai-1");
            return true;
        }
    }
    // $("#ukzip").hide();

    /* username validation end*/


    // submit the form function

    $("#myform").submit(function () {
        formval();
        // alert("hai-2");
        if(validError == true)
        {
            return true;
        }
        else{
            return false;
        }
    });

});



// $("#myform").submit(function () {
//     if (validError == true) { 
//         formval();
//         alert("Logined Sucessfull"); 
//         return false;
        

//     }
//     else {
//         formval();
//         alert("Logined Sucessfull-2");
//         return true;

//     }
// });