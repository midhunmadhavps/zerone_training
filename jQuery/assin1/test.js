$(document).ready(function () {
    // $("#user").hide();
    let usernameError = true;
    let username2Error = true;


    $('#fname').keyup(function () {
        validateform();
    })
    $('#lname').keyup(function () {
        validateform();
    })
    function validateform() {
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        // let date = $("#date").val();
        // let month = $("#month").val();
        // let year = $("#year").val();
        // let coun = $("#country").val();
        // let email = $("#email").val();
        // var valid1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // var valid2 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
        // let pass1 = $("#pass1").val();
        // let pass2 = $("#pass2").val();


        if (fname.length == "") {
            // alert("please fill last name");
            // $("#user").show();  
            $("#user").removeClass("d-none").show();
            usernameError = false;
            return false;
        }
        else if (lname.length == "") { 
            alert("please fill last name");

            $("#user2").removeClass("d-none").show();
            username2Error = false;
            return false;
        }
        // else if ($('input:radio[id="optradio"]:checked').length == 0) {
        //     alert('please select the gender');
        // }
        // else if (date.length == "") {
        //     alert("please select date");
        // }
        // else if (month.length == "") {
        //     alert("please select month");
        // }
        // else if (year.length == "") {
        //     alert("please select year");
        // }
        // else if (coun.length == "") {
        //     alert("please select country");
        // }
        // else if (email.length == "" || !valid1.test(email)) {
        //     alert("invalid email");
        //     return false;
        // }
        // else if (pass1.length == "" || !valid2.test(pass1)) {
        //     alert("invalid password");
        //     return false;
        // }
        // else if (pass2.length == "" || pass2 != pass1) {
        //     alert("Passwords doesn't Match");
        //     return false;
        // }
        else {
            $("#user").hide();
            // $("#user2").hide();

        }

    }

    // $("myform").submit(function(){
    //     alert("Submitted");
    //     validateform();
    //   });


    $("#save").click(function () {
        // alert("hai");
        validateform();
        if (usernameError == true && username2Error == true) {
            return true;
        } else {
            return false;
        }

    });



});

