

function runEdit(){
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="block";
}
        
document.getElementById('regSubmit').addEventListener('click',function(){
    
    var field1ValLen = document.querySelector('#inputEmail3').value.length;
    var field2ValLen = document.querySelector('#fni').value.length;
    var field3ValLen = document.querySelector('#lni').value.length;
    var field4ValLen = document.querySelector('#dti').value.length;
    var field5ValLen = document.querySelector('#lin').value.length;

    //alert(fieldValLen);
   if(field1ValLen == 0 && field2ValLen == 0 && field3ValLen == 0 && field4ValLen == 0 && field5ValLen == 0){
        alert("plz fill all");
    }
    else {
        runOut();
    }
     
    document.querySelector('#inputEmail3').addEventListener('focusout', function(){
         alert('working');
       var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       var email =  document.querySelector('#inputEmail3').value;
         
         if(pattern.test(email) && email != ''){
             alert('plz enter valid email')
         }
         else{
             runOut();
         }
     })
});
function runOut(){
                var inEm = document.getElementById("inputEmail3").value;
            document.getElementById("emo").innerHTML=inEm;
                  var inFn = document.getElementById("fni").value;
            document.getElementById("fto").innerHTML=inFn;
                var inLn = document.getElementById("lni").value;
            document.getElementById("lno").innerHTML=inLn;
            
                
                
                if(document.getElementById('mRad').checked) {
                document.getElementById("go").innerHTML="Male";
  }
                else if(document.getElementById('fmRad').checked) {
                    document.getElementById("go").innerHTML="Female";
  
}       
                else if(document.getElementById('Orad').checked) {
                    document.getElementById("go").innerHTML="Others";
                }
                var inDt = document.getElementById("dti").value;
            document.getElementById("dto").innerHTML=inDt;
                
        document.getElementById("second").style.display="none";
    document.getElementById("first").style.display="block";        
                
                 var inMb = document.getElementById("moi").value;
            document.getElementById("mno").innerHTML=inMb;
                 var inLo = document.getElementById("lin").value;
            document.getElementById("lto").innerHTML=inLo;
        
            }