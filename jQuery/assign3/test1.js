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
    let ziperror = true;




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

    // $("").change(function(){
    //     alert("The text has been changed.");
    //   });

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
        // alert("logined sucessfully")
        $('#alert').dialog({
            title:"",
            open: function(){
                setTimeout(function(){
                    $("#alert").dialog("close");
                },5000);
            }
        });
        return false;

        }
    }

    function zip(){
        let zips = $("#zip").val();
        var zip1= /^[0-9]{5}(?:-[0-9]{4})?$/;
        var zip2= /^[0-9]{6}(?:-[0-9]{4})?$/;
        let country = $("#country").val();


        if((country=="usa")&&(!zip1.test(zips))){
            $("#usazip").removeClass("d-none").show();
            ziperror == false;

        }
        else if (((country=="uk") || (country=="aus") || (country=="china") || (country=="india")) && (!zip2.test(zips))){
            $("#ukzip").removeClass("d-none").show();
            ziperror == false;
        }
         else {
            $("#usazip").hide();
            $("#ukzip").hide(); 
            return true;
        }
    }
    /* username validation end*/

    $('#cancel').on('click',function(){
        $('#Failed').dialog({
            title:"",
            open: function(){
                setTimeout(function(){
                    $("#Failed").dialog("");
                },0);
            }

        });
    });
    // submit the form function

    $("#myform").submit(function () {
        formval();
        zip();
        if (usernameError == true && username2Error == true && radioError == true 
        && dateError == true && monthError == true && yearError == true &&
        countryError == true && emailerror == true && password == true && confirmpass == true && ziperror == true) {
            
            return true;
        } else {
            return false;
        }
    });

});
