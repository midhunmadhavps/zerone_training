$(document).ready(function () {

    var con_pass;
    // let usernameError = true;
    let username2Error = true;
    let radioError = true;
    let dateError = true;
    let monthError = true;
    let yearError = true;

    /* username validation start*/

    $('#fname').keyup(function () {
        fnameval();
    })

    function fnameval() {
        let fname = $("#fname").val();
        if (fname.length == "" || fname.length == null) {
            $("#user").removeClass("d-none").show();
            // usernameError = false;
            return false;
        }
        else {
            $("#user").hide();
            return true;
        }
    }

    $('#lname').keyup(function () {
        lnameval();
    })
    function lnameval() {
        let lname = $("#lname").val();

        if (lname.length == "" || lname.length == null) {
            $("#user2").removeClass("d-none").show();
            username2Error = false;
            return false;
        }
        else {
            $("#user2").hide();
            return true;
        }
    }

    /* username validation end*/

    /* radiobutton validation start */
    $("#optradio").change(function () {
        $("#radio").hide();
    })
    function radioval() {
        if ($('input:radio[id="optradio"]:checked').length == 0) {
            $("#radio").removeClass("d-none").show();
            return false;
        }
        else {
            return true;
        }
    }
    /* radiobutton validation end */

    /* date validation start */

    $('#date').change(function () {
        dateval();
        $("#d_val").hide();
    });
    $('#month').change(function () {
        dateval();
        $("#m_val").hide();
    });
    $('#year').change(function () {
        dateval();
        $("#y_val").hide();
    });
    function dateval() {
        let date = $("#date").val();
        let month = $("#month").val();
        let year = $("#year").val();

        if (date.length == "") {
            $("#d_val").removeClass("d-none").show();
            dateError = false;
            return false;
        }
        else if (month.length == "") {
            $("#m_val").removeClass("d-none").show();
            monthError = false;
            return false;
        }
        else if (year.length == "") {
            $("#y_val").removeClass("d-none").show();
            yearError = false;
            return false;
        }
        else {
            $("#d_val").hide();
            return true;
        }
    }
    /* date validation end */

    /* country validation start */

    $("#country").change(function () {
        $("#c_val").hide();
    });
    function countryval() {
        let country = $("#country").val();
        if (country.length == 0 || country.length == null) {
            $("#c_val").removeClass("d-none").show();
            return false;
        }
        else {
            return true;
        }
    }

    /* country validation end */

    /* email validation start */

    $('#email').keyup(function () {
        emailval();
    })

    function emailval() {
        let email = $("#email").val();
        var valid1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.length == "" || email.length == null || !valid1.test(email)) {
            $("#e_val").removeClass("d-none").show();
            return false;
        }
        else {
            $("#e_val").hide();
            return true;
        }
    }

    /* email validation end */

    /* password validation start */

    $('#pass1').keyup(function () {
        passwordval();
        if (pass2.length == "" || pass2!=pass1) {
            // alert("hi");
            $('#cp_val').removeClass("d-none").show();
            return false;
        }
        else {
            $('#cp_val').hide();
            return true;
        }
    });

    $('#pass2').keyup(function () {
        passwordval();
    })
    function passwordval() {
        var valid2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
        let pass1 = $("#pass1").val();
        let pass2 = $("#pass2").val();
        var con_pass = pass2;

        if (pass1.length == "" || !valid2.test(pass1)) {
            $("#p_val").removeClass("d-none").show();
            return false;
        }
        else if (pass1.length != "")
        {
            $('#p_val').hide();
            // alert(pass2);
            return false;
        }
        else {
            // $('#p_val').hide();
            // $('#cp_val').hide();
            return true;
        }
    }

    function passwordconfirm(){
    alert(con_pass+"midhun");
        
    }
    /* password validation end */



    // submit the form function

    $("#myform").submit(function () {
        fnameval();
        lnameval();
        dateval();
        radioval();
        countryval();
        emailval();
        passwordval();
        passwordconfirm();
        if (username2Error == true
            && dateError == true && monthError && yearError
            && radioError) {
            return true;
        } else {
            return false;
        }
    });

});

