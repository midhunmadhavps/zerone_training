$(document).ready(function(){
    $('#chkParent').click(function() {
        var isChecked = $(this).prop("checked");
        
        $('#tab1 tr:has(td)').find('input[type="checkbox"]').prop('checked', isChecked);
      });


      $('#tab1 tr:has(td)').find('input[type="checkbox"]').click(function() {
        var isChecked = $(this).prop("checked");
        var isHeaderChecked = $("#chkParent").prop("checked");
        if (isChecked == false && isHeaderChecked)
          $("#chkParent").prop('checked', isChecked);

        else {
          $('#tab1 tr:has(td)').find('input[type="checkbox"]').each(function() {
            if ($(this).prop("checked") == false)
              isChecked = false;
              $("#chkparent").hide();
              alert("hai");
          });
          
        }
      });
    // function check(){
    //     if($('#chkParent').prop('checked') == true){
    //         alert("hai");
    //         $('#tab1 tr:has(td)').find('input[type="checkbox"]').prop('checked', true);
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // }
    // check();
});