$(document).ready(function(){
    $('#size-button1').click(function(){
                            $('#show button').removeClass('size-button2').addClass('size-button');
                            $('#show h4').removeClass('size2').addClass('size');
                            $('#size-button1').removeClass('size-button').addClass('size-button2');
                            $('#size1').removeClass('size').addClass('size2');
    });
     $('#size-button2').click(function(){
                            $('#show button').removeClass('size-button2').addClass('size-button');
                            $('#show h4').removeClass('size2').addClass('size');
                            $('#size-button2').removeClass('size-button').addClass('size-button2');
                            $('#size2').removeClass('size').addClass('size2');
    });
     $('#size-button3').click(function(){
                            $('#show button').removeClass('size-button2').addClass('size-button');
                            $('#show h4').removeClass('size2').addClass('size');
                            $('#size-button3').removeClass('size-button').addClass('size-button2');
                            $('#size3').removeClass('size').addClass('size2');
    });
     $('#size-button4').click(function(){
                            $('#show button').removeClass('size-button2').addClass('size-button');
                            $('#show h4').removeClass('size2').addClass('size');
                            $('#size-button4').removeClass('size-button').addClass('size-button2');
                            $('#size4').removeClass('size').addClass('size2');
    });
     $('#size-button5').click(function(){
                            $('#show button').removeClass('size-button2').addClass('size-button');
                            $('#show h4').removeClass('size2').addClass('size');
                            $('#size-button5').removeClass('size-button').addClass('size-button2');
                            $('#size5').removeClass('size').addClass('size2');
    });
});

function myfunction(){
var pin=parseInt(document.getElementById('pincodes').value.length);
var pins=parseInt(document.getElementById('pincodes').value);
var arr =pins.toString().split('') ;
var k=0;
var y=0;
if(arr[0]==6){
    for(i=0;i<arr.length;i++) {
            arr[i]=+arr[i]|0;
            if(isNaN(pins)){
                y=y+1;
                alert("oops! please enter currect pincode");
                break;
            }
            else{
                k = 10 * k + arr[i];
            }
       
    }
}
var len = k.toString().length;
if(len==6){
            document.getElementById("check").style.display="none";
            document.getElementById("change").style.display="";
            document.getElementById('tick').style.display="";
            document.getElementById('tip').style.display="none";
            document.getElementById('pincode-ser').style.display="";
            document.getElementById('pincodes').disabled="disabled";
            document.getElementById('change').style.backgroundColor="#ebebe4";
            
    }
    else if(y==0){
                alert("please enter valid pincode");
            }
    
}
function myfunction1(){
document.getElementById("check").style.display="";
document.getElementById("change").style.display="none";
document.getElementById('tick').style.display="none";
document.getElementById('tip').style.display="";
document.getElementById('pincode-ser').style.display="none";
document.getElementById('pincodes').disabled="";
}