$(document).ready(function(){
    $("#radB,#radB1").click(function(){
      $("#add").css("border", "1px solid #b9f0e5");
      $("#add").css("background-color", "#f4fdfb");
      $("#add1").css("border", "1px solid #b9f0e5");
      $("#add1").css("background-color", "#f4fdfb");
      $('#radB,#radB1').attr('checked',true);
      $("#toShowFinal").show()
    });
   
   
   $("#ediT").click(function(){
     $("#exampleModalLabel").html("Edit Address");
     $("#nameInput").val( $("#nameD").html());
     $("#mobInp").val( $("#mobID").html());
     $("#addInp").val( $("#ad1").html()+$("#ad2").html());
     $("#cdIp").val( $("#ad3").text());
     $("#pcInp").val( $("#ad3_5").html());
     $("#ltInp").val($("#ad2_5").html());
     $("#stInp").val($("#ad4").html());
     $("#sVbtn").click(function(){
   
   $("#nameD").html( $("#nameInput").val());
   $("#mobID").html( $("#mobInp").val());
   $("#ad1").html( $("#addInp").val());
   $("#ad3").html( $("#cdIp").val());
   $("#ad3_5").html( $("#pcInp").val());
   $("#ad2_5").html($("#ltInp").val());
   $("#ad4").html($("#stInp").val());
 });
   });

   $(function() {
    var chk = $('#radB,radB1');
    var btn = $('#toShowfinal');
  
    chk.on('change', function() {
      btn.prop("disabled", !this.checked);//true: disabled, false: enabled
    }).trigger('change'); //page load trigger event
  });

   
   $("#sVbtn2").click(function(){
     
    $("#add2").show();
    $("#addressName").html( $("#nameInput").val());
   $("#mobileID").html( $("#mobileInput").val());
   $("#address1").html( $("#addressInput").val());
   $("#address3").html( $("#cityDistrictIput").val());
   $("#address3_5").html( $("#pincodeInput").val());
   $("#address2_5").html($("#localTownInput").val());
   $("#address4").html($("#stateInput").val());
       
     });
  $("#removeOldAd").click(function(){
      
    $("#nameD").html( $("#addressName").html());
   $("#mobID").html( $("#mobileID").html());
   $("#ad1").html( $("#address1").html());
   $("#ad2").html($("#address2").html());
   $("#ad3").html( $("#address3").html());
   $("#ad3_5").html( $("#address3_5").html());
   $("#ad2_5").html($("#address2_5").html());
   $("#ad4").html($("#address4").html());
   $("#add2").hide();
     });
  
  


});