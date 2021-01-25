function numInput(num){
    var input= document.getElementById('calc-input');
    input.value += num;
}

function numResult(){
    var input= document.getElementById('calc-input');
    input.value = eval(input.value);
}

function numclear(){
    var input= document.getElementById('calc-input');
    input.value = " ";
}

function numPower(){
    var input= document.getElementById('calc-input');
    input.value = input.value**2;
}

function numunderRoot(){
    var input= document.getElementById('calc-input');
    input.value = (input.value**0.5).toFixed(7);
 }

 
function numPercent(){
    var input= document.getElementById('calc-input');
    input.value = (input.value/100);
}

