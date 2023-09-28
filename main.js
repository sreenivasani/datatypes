function printvalues(){
    
var stringVariable="hii good Afternoon everyone";
    
var numberVariable=6305819771;
    
var booleanVariable="true";
    
var arrayVariable="appele","banana","carrot","suresh","ramesh";

    
    var stringElement=document.getElementById("stringElement");
     var stringElement=document.getElementById("numberElement");
    var stringElement=document.getElementById("booleanElement");
    var stringElement=document.getElementById("arrayElement");
    
    stringElement.innerHTML=stringVariable;
    numberElement.innerHTML=numberVariable;
    booleanElement.innerHTML=booleanVariable;
    arrayElement.innerHTML=arrayVariable;
    
    }
printvalues();