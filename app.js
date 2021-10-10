
var result = document.getElementById('myText');


function myFunction2(opretor){
    var addopa = result.value;
    result.value = (addopa + opretor);
}




// all value display in inpute
function myFunction(number) {
    let lg = result.value.length
    if ( lg > 16 ) {
    } else {
        var addNumber = result.value;
        result.value = (addNumber + number);
    }
};

// create all velue delete Function
function cFunction(){
    if (result.value = "") {
        result.value = result.placeholder;
    }
};

// create eval function
function uqulFunction(){
    var fResult =  eval(result.value);
    result.value = fResult;
};

// create 1 by 1 value Delete Function
function crosFunction(){
    var valu = result.value
    if(valu!='') {
        result.value = result.value.slice(0,-1)
    }
}








