$(document).ready(function(){
     
     //dropdown js
    $("#menLink").hover(function(){
            $("#overlay").fadeIn();
            $("#text2").fadeOut();
            $("#text3").fadeOut();
            $("#text4").fadeOut();
            $("#text5").fadeOut();
            $("#text").fadeIn();

    });
   $("#womenLink").hover(function(){
    $("#overlay").fadeIn();
    $("#text2").fadeIn();
    $("#text3").fadeOut();
    $("#text4").fadeOut();
    $("#text5").fadeOut();
    $("#text").fadeOut();
   
   });
   $('#kidsLink').hover(function(){
        $("#overlay").fadeIn();
        $('#text3').fadeIn();
        $("#text2").fadeOut();
        $("#text4").fadeOut();
        $("#text5").fadeOut();
        $("#text").fadeOut()
   });
   $('#hlLink').hover(function(){
        $("#overlay").fadeIn();
        $('#text3').fadeOut();
        $("#text2").fadeOut();
        $("#text4").fadeIn();
        $("#text5").fadeOut();
        $("#text").fadeOut()
   });
   $('#disLink').hover(function(){
        $("#overlay").fadeIn();
        $('#text3').fadeOut();
        $("#text2").fadeOut();
        $("#text4").fadeOut();
        $("#text5").fadeIn();
        $("#text").fadeOut()
   });
    
  
  $('#text').parent().on('mouseover', function(e){
     if(this===e.target){
       $('#overlay').fadeOut();
     }
   });
//gall
   $('.gallImgCont').hover(function(){
     $(this).css("opacity", "0.8");
}, function(){
$(this).css("opacity", "1");

   });

   $('.gallImgCont ').click(function(){
     $('#homePage').hide();
     $('#productPage').show();
   });
   //homPage
   $('#toGoHome').click(function(){
      $('#homePage').show();
      $('#productPage').hide();
      $('#productDetails').hide();
      $('#loginPage').hide()
      $('#finalPage').hide();
      $('#addressPage').hide();

   });
//edit profile
   $('#toShowLog').click(function(){
    
     $('#homePage').hide();

     $('#productPage').hide();
     $('#productDetails').hide();
     $('#loginPage').show();
     $('#footerr').hide();
   });
   //addressPage
    $('#toShowAdd').click(function(){
      $('#productCalc').hide();
      $('#homePage').hide();
      $('#headerr').hide();
     $('#productPage').hide();
     $('#productDetails').hide();
     $('#loginPage').hide()
      $('#addressPage').show();
    })
   //product Det
   $('#toShowPD').click(function(){
       $('#productCalc').hide();
     $('#homePage').hide();

     $('#productPage').hide();
     $('#productDetails').show();
     $('#loginPage').hide()
   });
   //product calculation
   $('#toShowPC').click(function(){
          $('#productCalc').show();
          $('#homePage').hide();
          $('#headerr').hide();
        $('#productPage').hide();
        $('#productDetails').hide();
        $('#loginPage').hide()
   });
   //final page
   $('#toShowFinal').click(function(){
      $('#addressPage').hide();
      $('#finalPage').show();
      $('#homePage').hide();
      $('#productPage').hide();
      $('#productDetails').hide();
      $('#loginPage').hide()
   });
//slick js
$(".autoPlay").slick({
     slidesToShow:4,
     slidesToScroll:1,
     autoplay:true,
     autoplaySpeed: 2000,
});
$(".regular").slick({
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3
   });

   //editprofile
  

});





//Product Page
function onproduct1(){
     document.getElementById("footer1").style.width="99%";
     document.getElementById("footer1").style.marginTop="-20px";
     document.getElementById("footer1").style.height="25%";
     document.getElementById("footer1").style.backgroundColor="white";
     document.getElementById("footer1").style.textTransform="1s";
     document.getElementById("pro1").style.display="none";
     document.getElementById("pro11").style.display="none";
     document.getElementById("size1").style.display="";
}
function onproduct2(){
     document.getElementById("footer2").style.width="99%";
     document.getElementById("footer2").style.marginTop="-20px";
     document.getElementById("footer2").style.height="25%";
     document.getElementById("footer2").style.backgroundColor="white";
     document.getElementById("footer2").style.textTransform="1s";
     document.getElementById("pro2").style.display="none";
     document.getElementById("pro12").style.display="none";
     document.getElementById("size2").style.display="";
}
function onproduct3(){
     document.getElementById("footer3").style.width="99%";
     document.getElementById("footer3").style.marginTop="-20px";
     document.getElementById("footer3").style.height="25%";
     document.getElementById("footer3").style.backgroundColor="white";
     document.getElementById("footer3").style.textTransform="1s";
     document.getElementById("pro3").style.display="none";
     document.getElementById("pro13").style.display="none";
     document.getElementById("size3").style.display="";
}
function onproduct4(){
     document.getElementById("footer4").style.width="99%";
     document.getElementById("footer4").style.marginTop="-20px";
     document.getElementById("footer4").style.height="25%";
     document.getElementById("footer4").style.backgroundColor="white";
     document.getElementById("footer4").style.textTransform="1s";
     document.getElementById("pro4").style.display="none";
     document.getElementById("pro14").style.display="none";
     document.getElementById("size4").style.display="";
}
 
function onproductout1(){
  document.getElementById("footer1").style.width="99%";
  document.getElementById("footer1").style.marginTop="10px";
  document.getElementById("footer1").style.height="25%";
  document.getElementById("pro1").style.display="";
  document.getElementById("pro11").style.display="";
  document.getElementById("size1").style.display="none";
}
function onproductout2(){
  document.getElementById("footer2").style.width="99%";
  document.getElementById("footer2").style.marginTop="10px";
  document.getElementById("footer2").style.height="25%";
  document.getElementById("pro2").style.display="";
  document.getElementById("pro12").style.display="";
  document.getElementById("size2").style.display="none";
}
function onproductout3(){
  document.getElementById("footer3").style.width="99%";
  document.getElementById("footer3").style.marginTop="10px";
  document.getElementById("footer3").style.height="25%";
  document.getElementById("pro3").style.display="";
  document.getElementById("pro13").style.display="";
  document.getElementById("size3").style.display="none";
}
function onproductout4(){
  document.getElementById("footer4").style.width="99%";
  document.getElementById("footer4").style.marginTop="10px";
  document.getElementById("footer4").style.height="25%";
  document.getElementById("pro4").style.display="";
  document.getElementById("pro14").style.display="";
  document.getElementById("size4").style.display="none";
}

$('document').ready(function(){
$('#clear').click(function(){
    $('input[type=checkbox]').each(function() 
     { 
             this.checked = false; 
             $('#product1').show();
             $('#product2').show();
             $('#product3').show();
             $('#product4').show();
             
    }); 
}); 
});

$(document).ready(function(){
$(".dropdown-toggle").dropdown();
});

$('document').ready(function() {
$('input[type=checkbox]').on('change', function() {
if($(this).is(':checked')){
var values = [];
$.each($('input:checked'),function(index,input){
values.push(input.value);
});
var i=0;
for(i=0;i<values.length;i++){
if(values[i]=="bundles"){
 $('#product1').show();
 $('#product2').hide();
 $('#product3').show();
 $('#product4').hide();
}
if(values[i]=="single"){
 $('#product1').hide();
 $('#product2').show();
 $('#product3').hide();
 $('#product4').show();
}
if(values[i]=="Nike"){
 $('#product1').hide();
 $('#product2').show();
 $('#product3').show();
 $('#product4').show()
}
if(values[i]=="12"){
 $('#product1').show();
 $('#product2').show();
 $('#product3').show();
 $('#product4').show();
}
if(values[i]=="14"){
 $('#product1').show();
 $('#product2').hide();
 $('#product3').show();
 $('#product4').hide();
}
if(values[i]=="16"){
 $('#product1').show();
 $('#product2').hide();
 $('#product3').hide();
 $('#product4').show();
}
if(values[i]=="18"){
 $('#product1').show();
 $('#product2').show();
 $('#product3').show();
 $('#product4').hide();
}

}
}
else{
$('input[type=checkbox]').each(function() 
{ 
             this.checked = false; 
             $('#product1').show();
             $('#product2').show();
             $('#product3').show();
             $('#product4').show();
             
}); 
}
});
});
