/*document.getElementById("del").addEventListener("click", function(){
    document.getElementById("toShow").style.display="";
    document.getElementById("showing").style.display="inline-block";
    
});*/

$(document).ready(function(){
    $("#sh").hide();
    $("#odet").click(function(){
    $("#sh").toggle(2000);
    $('#order-details').hide(300);
    $('#order-btn-show').toggle(2000);
        
    });
    $("a").hover(function(){
$(this).css("color", "#14cda8");
$(this).css("text-decoration","none");
}, function(){
$(this).css("color", "black");
});
$(document).keyup(function  (e) {
if(e.keyCode === 27) {
    $("#order-details").toggle(1000);
}
});
$("#del").click(function(){
  $("#toShow").show();
$("#showing").show();
}) 
$("#tosHov").mouseenter(
   
    function(){
    $("#toHov").show(500);
    $("#tosHov").html("<i class='fa fa-minus-circle'></i>");
   

}
).mouseleave(function(){
    $("#toHov").hide(500);
    $("#tosHov").html("<i class='fa fa-plus-circle'></i>");
    
});

});