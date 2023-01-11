$(document).ready(function () {
    $('#chkParent').click(function () {
        var isChecked = $(this).prop("checked");

        $('#tab1 tr:has(td)').find('input[type="checkbox"]').prop('checked', isChecked);
    });

    $('#tab1 tr:has(td)').find('input[type="checkbox"]').click(function () {
        var isChecked = $(this).prop("checked");
        var isHeaderChecked = $("#chkParent").prop("checked");

        if (isChecked == false && isHeaderChecked) {
            // $("#chkParent").prop('checked', isChecked);
            $("#chkParent").css("accent-color", "gray");
            // alert("4");
        }
        else {
            $('#tab1 tr:has(td)').find('input[type="checkbox"]').each(function () {
                if ($(this).prop("checked") == false) {
                    isChecked = false;
                    $("#chkParent").css("accent-color", "gray");
                    // alert("1");
                }
                // else if ($(this).prop("checked") == true) {
                //     isChecked = false;
                //     $("#chkParent").css("accent-color", "gray");
                //     // alert("2");
                //     // boxes();
                // }
                else {
                    $("#chkParent").css("accent-color", "gray");
                    // alert("3");
                }

            });
        }
    });

});


// $(document).ready(function () {
//     $('#chkParent').click(function () {
//         var isChecked = $(this).prop("checked");

//         $('#tab1 tr:has(td)').find('input[type="checkbox"]').prop('checked', isChecked);
//     });


//     $('#tab1 tr:has(td)').find('input[type="checkbox"]').click(function () {

//         var isChecked = $(this).prop("checked");
//         var isHeaderChecked = $("#chkParent").prop("checked");

//         if (isChecked == false && isHeaderChecked) {
//             // $("#chkParent").prop('checked', isChecked);
//             $("#chkParent").css("accent-color", "red");
//         }
//         else {
//             $('#tab1 tr:has(td)').find('input[type="checkbox"]').each(function () {
//                 if ($(this).prop("checked") == false) {
//                     isChecked = false;
//                     $("#chkParent").css("accent-color", "red");
//                 }
//                 else if($(this).prop("checked") == true){
//                     isChecked = true;
//                     $("#chkParent").css("accent-color", "gray");
//                 }
//                 else{
//                     $("#chkParent").css("accent-color", "red");
//                 }

//             });
//         }
//     });
// });