let calculator = calculatorModule()

window.calculator = (function() {
    
let currDisp = document.getElementById("currentDisplay"); 

let operation = 0; //store operation on calculator
let maxLength = 10;


//function toDisplay(num) {
//    currDisp.innerHTML = num
//}

function buttonClick(num) {
   
    if (currDisp.length > maxLength) {
        currDisp.innerHTML = "Number is too big!"
    } else {
        currDisp.innerHTML = num;
    }
}

/////////
let numSeven = document.getElementById("seven").onclick = buttonClick(7);

let numEight = document.getElementById("eight").onclick = buttonClick(8);

let numNine = document.getElementById("nine").onclick = buttonClick(9);

let divideFunc = document.getElementById("divide").onclick = function(num) {
    currDisp.innerHTML = "/" + num;
    calculator.divide(num)
    operation = 1;
  //  return calculator.getTotal;
            };

let clearFunc = document.getElementById("clear").onclick = function() {
    calculator.clearMemory;
    calculator.getTotal = 0;
    currDisp.innerHTML = 0; 
        };
/////////
let numFour = document.getElementById("four").onclick = buttonClick(4);

let numFive = document.getElementById("five").onclick = buttonClick(5);

let numSix = document.getElementById("six").onclick = buttonClick(6);

let multFunc = document.getElementById("multiply").onclick = function(num) {
    currDisp.innerHTML = "x" + num;
    calculator.multiply(num);
    operation = 2;
  //  return calculator.getTotal;
        };
let balanceFunc = document.getElementById("balance").onclick = function() { 
    currDisp.innerHTML = calculator.recallMemory;
        };
/////////
let numOne = document.getElementById("one").onclick = buttonClick(1);

let numTwo = document.getElementById("two").onclick = buttonClick(2);

let numThree = document.getElementById("three").onclick = buttonClick("3");

let subtractFunc = document.getElementById("subtract").onclick = function(num) {
    currDisp.innerHTML = "-" + num;
    calculator.subtract(num);
    operation = 3;
//    return calculator.getTotal
    };

let depositFunc = document.getElementById("deposit").onclick = function(num) {
        currDisp.innerHTML = calculator.saveMemory;
        return calculator.recallMemory;
        };
/////////
let numZero = document.getElementById("zero").onclick = buttonClick(0);

let numZeroes = document.getElementById("zeroes").onclick = buttonClick(00);

let toDecimal = document.getElementById("decimal").onclick = function addDecimal() {
        if (currDisp.length === 0) { //if already zero add 0.
            currDisp = "0." ; 
        } else {
          currDisp = currDisp + "." ;  //insert decimal to number
        }
    };

let addFunc = document.getElementById("add").onlick = function(num) {
    currDisp.innerHTML = "+" + num;
    calculator.add(num);
    operation = 4;
//    return calculator.getTotal;
};

let withdrawFunc = document.getElementById("withdraw").onclick = function(num) {
    calculator.subtract(num) = calculator.saveMemory; //saving total to memory
    currDisp.innerHTML = calculator.recallMemory; //show total
        };
/////////
let equalsTo = document.getElementById("equals").onclick = function operation() {
    if (operation === 1) {
       return calculator.getTotal;
    } else if (operation === 2) {
        return calculator.getTotal;
    } else if (operation ===3) {
        return calculator.getTotal;
    } else if (operation === 4) {
        return calculator.getTotal;
    } else {
        return null;
    }
}



    }) ();