//append value
function appendValue(val) {
    document.getElementById("display").value += val;
}
//clear display
function clearDisplay(){
    document.getElementById("display").value="";
}

//calculate result
function calculateResult(){
//const display=document.getElementById("dispaly");
//display.value=eval(dispaly.value);
//exception handling
    const display=document.getElementById("display");
    //error handling
    try{
    display.value=eval(display.value);
    }
    catch(e){
        display.value="Error";
    }
}