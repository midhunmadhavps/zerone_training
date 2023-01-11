$(document).ready(function () {
    $('#btn1').click(function () {
        var Text = $('#text1').val();
        if (Text.trim() != "") {
            $('#select1').append(new Option(Text));
            // alert("hai");
            // location.reload(true);

        }
        // alert("hai");
        
    });
});